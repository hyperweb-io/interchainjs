# Solana Websocket Test Troubleshooting

## When Jest Hangs on `yarn test:ws`

Running the websocket suite (`yarn --cwd networks/solana test:ws`) occasionally stalls because lingering async handles prevent Jest from exiting. Use the wrapper below to enforce a hard timeout while you debug the root cause:

```bash
bash -lc 'python - <<'"'PY'"'
import os
import signal
import subprocess
import sys

cmd = [
    "yarn", "--cwd", "networks/solana", "test:ws",
    "--runInBand", "--detectOpenHandles", "--testTimeout=120000"
]

process = subprocess.Popen(cmd, preexec_fn=os.setsid)
try:
    process.wait(timeout=30)  # adjust as needed (seconds)
    sys.exit(process.returncode)
except subprocess.TimeoutExpired:
    os.killpg(process.pid, signal.SIGTERM)
    try:
        process.wait(timeout=10)
    except subprocess.TimeoutExpired:
        os.killpg(process.pid, signal.SIGKILL)
    print("Command timed out after 30 seconds", file=sys.stderr)
    sys.exit(124)
PY
'
```

## Recommended Debug Steps

- Keep `--runInBand` and `--detectOpenHandles` enabled to surface leaking listeners or timers.
- If the wrapper times out, inspect console output for the last executed test and pending network calls.
- Ensure the Solana event client unsubscribes from all streams and closes sockets in `afterEach` / `afterAll` hooks.
- When edits touch shared websocket utilities, re-run the tests with the wrapper to confirm they exit cleanly before removing timeout safeguards.
- Once the hanging cause is fixed, rerun the suite without the wrapper to verify Jest finishes normally.

## Notes

- The wrapper sends `SIGTERM` to the entire process group and escalates to `SIGKILL` if the suite still resists shutdown.
- Update the timeout value if your environment needs longer to start the sandbox validator.
