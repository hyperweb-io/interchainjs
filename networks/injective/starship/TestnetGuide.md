1. set TEST_PRIVATE_KEY on networks/injective/.env.development according to networks/injective/.env.development.example
2. run `pnpm injective:test`

* Injective testnet and mainnet public-endpoints: https://docs.injective.network/develop/public-endpoints/
* Injective testnet swagger: https://testnet.sentry.lcd.injective.network/swagger/#/Query/AllBalances

* Injective send cosmos token example: https://docs.ts.injective.network/transactions/transactions-cosmos#example-prepare--sign--broadcast

* Injective address on cosmos is generated from evm address: https://docs.injective.network/learn/basic-concepts/accounts#deriving-injective-account-from-a-private-keymnemonic