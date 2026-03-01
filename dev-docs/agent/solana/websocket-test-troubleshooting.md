# Solana Websocket Test Troubleshooting

## Mandatory Test Harness

When you run the websocket suite you **must** launch it through the Python wrapper below. Running `pnpm --filter @interchainjs/solana run test:ws` directly will hang indefinitely—never execute the Jest command on its own.

## Python Wrapper (180s Timeout)

```bash
bash -lc 'python - <<'"'PY'"'
import os
import signal
import subprocess
import sys

CMD = [
    "pnpm", "--filter", "@interchainjs/solana", "run", "test:ws",
    "--runInBand", "--detectOpenHandles", "--testTimeout=120000"
]
WRAPPER_TIMEOUT = 180  # seconds

process = subprocess.Popen(CMD, preexec_fn=os.setsid)
try:
    process.wait(timeout=WRAPPER_TIMEOUT)
    sys.exit(process.returncode)
except subprocess.TimeoutExpired:
    os.killpg(process.pid, signal.SIGTERM)
    try:
        process.wait(timeout=10)
    except subprocess.TimeoutExpired:
        os.killpg(process.pid, signal.SIGKILL)
    print(f"Command timed out after {WRAPPER_TIMEOUT} seconds", file=sys.stderr)
    sys.exit(124)
PY
'
```

## Debugging Expectations

- The websocket tests must complete before the 180 s wrapper timeout. If they do, consider the hang resolved.
- A wrapper timeout means the suite is still stuck; inspect the Jest output for the last running test and any open handles.
- Keep `--runInBand` and `--detectOpenHandles` enabled so Jest reports lingering timers, sockets, or subscriptions.
- Verify every spec cleans up Solana subscriptions in `afterEach`/`afterAll` hooks before rerunning the wrapper.
- Only once the suite exits cleanly under the wrapper should you evaluate changes to the underlying tests; continue using the wrapper for all routine runs.

## Additional Notes

- The wrapper sends `SIGTERM` to the full process group, falling back to `SIGKILL` if needed.
- If your environment legitimately needs more than 180 seconds (for example, slow validator startup), raise `WRAPPER_TIMEOUT` but keep the safeguard in place.
- Do not remove or bypass the wrapper; it is required to prevent zombie websocket processes from hanging Jest forever.
