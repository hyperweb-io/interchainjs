#!/usr/bin/env bash
set -euo pipefail

# ===== Config =====
NS="${NS:-default}"   # Override with --ns
POD_NAME=""           # Override with --pod
SLEEP_BETWEEN=0.2
CHECK_RETRIES=25      # 25 * 0.2s = 5s
PORTS_ENV_FILE="${PORTS_ENV_FILE:-$(dirname "$0")/.pf-env}"

usage() {
  echo "Usage: $0 [--ns <namespace>] [--pod <pod-name>]"
  exit 1
}

# Parse args
while [[ $# -gt 0 ]]; do
  case "$1" in
    --ns)  NS="$2"; shift 2 ;;
    --pod) POD_NAME="$2"; shift 2 ;;
    -h|--help) usage ;;
    *) echo "Unknown arg: $1"; usage ;;
  esac
done

log() { echo "[$(date +%H:%M:%S)] $*"; }
err() { echo "[$(date +%H:%M:%S)] ERROR: $*" >&2; }

# Kill processes listening on a local TCP port
free_port() {
  local port="$1"
  # macOS: use lsof; Linux: ss/fuser also works; we unify on lsof here
  if lsof -ti tcp:"$port" >/dev/null 2>&1; then
    lsof -ti tcp:"$port" | xargs -r kill -9 || true
  fi
}

# Start a single port-forward in background and verify it's up
start_pf() {
  local target="$1"   # pods/<pod> or service/<svc>
  local mapping="$2"  # <local>:<remote>
  local local_port="${mapping%%:*}"
  local remote_port="${mapping##*:}"

  free_port "$local_port"

  # Start in background
  # Capture logs for troubleshooting in CI
  mkdir -p "$(dirname "$PORTS_ENV_FILE")"
  local log_file="$(dirname "$PORTS_ENV_FILE")/pf_${local_port}.log"
  kubectl -n "$NS" port-forward "$target" "$mapping" >"$log_file" 2>&1 &
  local pf_pid=$!

  # Health check: wait for local port to open
  local ok=0
  for _ in $(seq 1 $CHECK_RETRIES); do
    # Prefer nc if available; otherwise use bash's /dev/tcp
    if command -v nc >/dev/null 2>&1; then
      if nc -z 127.0.0.1 "$local_port" >/dev/null 2>&1; then
        ok=1
        break
      fi
    else
      if (exec 3<>/dev/tcp/127.0.0.1/"$local_port") 2>/dev/null; then
        # Close the FD we just opened
        exec 3>&-
        exec 3<&-
        ok=1
        break
      fi
    fi
    sleep "$SLEEP_BETWEEN"
  done

  if [[ $ok -eq 1 ]]; then
    log "Forwarded $target  (local $mapping)"
    # Record ports to env file for consumers (e.g., CI step/tests)
    case "$remote_port" in
      8899)
        echo "export SOLANA_RPC_PORT=$local_port" >>"$PORTS_ENV_FILE" ;;
      8900)
        echo "export SOLANA_WS_PORT=$local_port" >>"$PORTS_ENV_FILE" ;;
      8080)
        echo "export REGISTRY_REST_PORT=$local_port" >>"$PORTS_ENV_FILE" ;;
      9090)
        echo "export REGISTRY_GRPC_PORT=$local_port" >>"$PORTS_ENV_FILE" ;;
    esac
    return 0
  else
    err "Failed to forward $target  (local $mapping); killing pid $pf_pid"
    kill -9 "$pf_pid" >/dev/null 2>&1 || true
    # Surface port-forward logs to help debugging
    if [[ -f "$log_file" ]]; then
      err "---- port-forward log ($log_file) ----"
      tail -n +1 "$log_file" >&2 || true
      err "---- end log ----"
    fi
    return 1
  fi
}

# Try a list of local ports for a given remote port and record the first success
start_pf_any() {
  local target="$1"
  local remote_port="$2"
  shift 2
  local candidate
  for candidate in "$@"; do
    if start_pf "$target" "${candidate}:${remote_port}"; then
      return 0
    fi
  done
  return 1
}

# Resolve POD_NAME if not provided
resolve_pod() {
  if [[ -n "$POD_NAME" ]]; then
    return 0
  fi

  # 1) app=solana-genesis
  POD_NAME="$(kubectl -n "$NS" get pods -l app=solana-genesis -o jsonpath='{.items[0].metadata.name}' 2>/dev/null || true)"
  if [[ -n "${POD_NAME:-}" ]]; then return 0; fi

  # 2) app.kubernetes.io/name=solana-genesis
  POD_NAME="$(kubectl -n "$NS" get pods -l app.kubernetes.io/name=solana-genesis -o jsonpath='{.items[0].metadata.name}' 2>/dev/null || true)"
  if [[ -n "${POD_NAME:-}" ]]; then return 0; fi

  # 3) Name contains solana-genesis
  POD_NAME="$(kubectl -n "$NS" get pods -o name 2>/dev/null | grep -m1 'solana-genesis' | sed 's|pods/||' || true)"
  if [[ -n "${POD_NAME:-}" ]]; then return 0; fi

  return 1
}

# ===== Main =====
if ! resolve_pod; then
  err "Could not find the solana-genesis Pod. Check the namespace (--ns) or specify explicitly with --pod <pod-name>."
  err "Debug tip: kubectl -n $NS get pods | grep solana"
  exit 1
fi

log "Using namespace: $NS"
log "Using pod:       $POD_NAME"

# Reset env file for fresh run
mkdir -p "$(dirname "$PORTS_ENV_FILE")"
: > "$PORTS_ENV_FILE"

success=0

# ---- Pod/Service Ports (with fallback) ----
# Try pod first; if it fails, fall back to service/solana-genesis
( start_pf "pods/$POD_NAME" "8899:8899" || start_pf "service/solana-genesis" "8899:8899" ) && ((success++))  # Solana RPC

# WebSocket: try default 8900 locally; if bind fails, try alternates and record selected port
if start_pf "pods/$POD_NAME" "8900:8900" || start_pf "service/solana-genesis" "8900:8900"; then
  ((success++))
else
  # Try alternate local ports mapping to remote 8900
  if start_pf_any "pods/$POD_NAME" 8900 8910 18900 19000 29000 || \
     start_pf_any "service/solana-genesis" 8900 8910 18900 19000 29000; then
    ((success++))
  fi
fi
start_pf "pods/$POD_NAME" "8001:8001" && ((success++))  # Exposer
start_pf "pods/$POD_NAME" "9900:9900" && ((success++))  # Faucet

# ---- Registry Service Ports ----
start_pf "service/registry" "8081:8080" && ((success++))  # REST
start_pf "service/registry" "9091:9090" && ((success++))  # gRPC

if [[ $success -gt 0 ]]; then
  echo
  echo "Port-forwards ready ($success established):"
  echo "  RPC:            http://127.0.0.1:8899"
  echo "  WS:             ws://127.0.0.1:8900"
  echo "  Exposer:        http://127.0.0.1:8001"
  echo "  Faucet:         http://127.0.0.1:9900"
  echo "  Registry REST:  http://127.0.0.1:8081"
  echo "  Registry gRPC:  127.0.0.1:9091"
else
  err "No port forwards succeeded. Check that the pod/service ports exist and the namespace is correct."
  exit 1
fi
