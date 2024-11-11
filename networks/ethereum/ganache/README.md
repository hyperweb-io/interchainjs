1. use ganache js to run a ethereum node locallly
```
npx ganache \
  --account="0x0000000000000000000000000000000000000000000000000000000000000001,1" \
  --account="0x0000000000000000000000000000000000000000000000000000000000000002,1"
```
2. run test：
```
npx jest --preset ts-jest ganache/__tests__/send.test.ts
```