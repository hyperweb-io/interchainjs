# Solana Sandbox Testing

This guide describes how to use `.augment/solana-sandbox.sh` to run local Solana integration tests without the Starship Kubernetes stack.

## Prerequisites
- Install the Solana CLI (provides `solana-test-validator`, `solana-keygen`, `solana`). On macOS you can run `brew install solana`.
- Ensure repository dependencies are installed (`pnpm install`).

## Starting the sandbox validator

```bash
# From the repository root
.augment/solana-sandbox.sh start
```

The helper reads `networks/solana/starship/configs/config.yaml` to align RPC/WebSocket/Faucet ports with the Starship defaults (8899/8900/9900). It writes runtime artifacts to `tmp/` and records the validator PID so subsequent `start` calls are idempotent.

Useful subcommands:

```bash
.augment/solana-sandbox.sh status   # check if the validator is running
.augment/solana-sandbox.sh logs     # tail the last 50 lines of the validator log
.augment/solana-sandbox.sh health   # run curl against http://127.0.0.1:8899/health
.augment/solana-sandbox.sh stop     # stop the validator and remove the PID file
```

## Verifying connectivity

Hit the sandbox `health` endpoint directly to confirm the RPC is up:

```bash
curl -s http://127.0.0.1:8899/health
```

The validator replies with `ok` when it is ready to serve requests. Investigate the sandbox logs if you see anything else before continuing with integration tests.

## Running the refactored integration test

With the sandbox running, execute the Starship integration test directly from the Solana workspace:

```bash
pnpm --filter networks/solana test:integration
```

This test now pins the protocol adapter to `SolanaProtocolVersion.SOLANA_1_18` and requests balances using `commitment: processed`, so it matches the sandbox behaviour. The test suite will airdrop funds to a throwaway keypair, perform a transfer, and assert balances via RPC.

## Cleanup

NOTE: confirm with the user before stopping the sandbox, there might be additional tests to run.

After testing, stop the sandbox and clear temporary ledger data:

```bash
.augment/solana-sandbox.sh stop
rm -rf tmp
```

Deleting `tmp/` resets the ledger so the next session starts from a clean state.

## Troubleshooting

- **Airdrop failures**: ensure port 9900 is free and the validator log (via `logs`) shows slot advancement. Restarting the sandbox usually restores the faucet.
- **RPC conflicts**: if other services are bound to 8899/8900, override ports with `SOLANA_RPC_PORT`/`SOLANA_WS_PORT` before running `start`.
- **WebSocket probe errors**: confirm nothing else is intercepting the port and re-run the probe. The script now tolerates the validator closing the socket immediately after the handshake.
