1. use ganache js to run a ethereum node locally

```
npx ganache \
  --account="0x0000000000000000000000000000000000000000000000000000000000000001,1000000000000000000" \
  --account="0x0000000000000000000000000000000000000000000000000000000000000002,1000000000000000000"
```
or
```
yarn run-ganache
```

2. run test under networks/ethereum:

```
yarn test:devnet
```

3. for ethers test, run under networks/ethereum:

```
yarn test:ethers
```