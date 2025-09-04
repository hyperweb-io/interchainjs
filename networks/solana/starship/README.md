# Solana Starship Local Testnet Guide

This guide shows how to start/stop a local Solana testnet via Starship, verify the RPC is healthy, fix port-forwarding if needed, use the faucet, check balances, and run tests.

## Start and Stop

Run these commands from the `networks/solana` directory:

```bash
pnpm run starship:start
```

## Verify RPC Health

After starting, confirm the node is healthy:

```bash
curl -s http://127.0.0.1:8899/health
```

Expected output is `ok`.

## If Port 8899 Is Not Mapped

If `curl` fails or the RPC is unreachable, check whether something is listening on `:8899`:

```bash
lsof -i :8899
```

- If nothing is listening, manually start port-forwarding:

```bash
bash starship/port-forward.sh
```

- Once forwarding is up, re-run the health check:

```bash
curl -s http://127.0.0.1:8899/health
```

## Faucet: Request Airdrop

Example request to airdrop 1 SOL (1_000_000_000 lamports) to a public key:

```bash
curl -s http://127.0.0.1:8899 \
  -H "Content-Type: application/json" \
  -d '{
    "jsonrpc":"2.0",
    "id":1,
    "method":"requestAirdrop",
    "params":[
      "your solana address",
      1000000000,
      {"commitment":"confirmed"}
    ]
  }'
```

## Query Balance

Check the balance of the same address:

```bash
curl -s http://127.0.0.1:8899 \
  -H "Content-Type: application/json" \
  -d '{
    "jsonrpc":"2.0",
    "id":1,
    "method":"getBalance",
    "params":[
      "your solana address",
      {"commitment":"confirmed"}
    ]
  }'
```

## Run Tests

From the `networks/solana` package, run:

```bash
pnpm run test
```

## Stop

When you are done, stop the local testnet:

```bash
pnpm run starship:stop
```
