import { TelescopeInput } from '@cosmology/telescope';
import telescope from '@cosmology/telescope';
import { join } from 'path';
import { rimrafSync as rimraf } from 'rimraf';
import deepmerge from 'deepmerge';

export const options: TelescopeInput = {
  protoDirs: [],
  outPath: '',
  options: {
    "classesUseArrowFunctions": true,
    "env": "v-next",
    "useInterchainJs": true,
    "useSDKTypes": false,
    "prototypes": {
      "enableRegistryLoader": false,
      "enableMessageComposer": true,
      "enabled": true,
      "parser": {
        "keepCase": false
      },
      "methods": {
        "fromJSON": false,
        "toJSON": false,
        "encode": true,
        "decode": true,
        "fromPartial": true,
        "toAmino": true,
        "fromAmino": true,
        "fromProto": false,
        "toProto": false,
      },
      "addTypeUrlToDecoders": false,
      "addTypeUrlToObjects": true,
      "addAminoTypeToObjects": true,
      "typingsFormat": {
        "duration": "duration",
        "timestamp": "date",
        "useExact": false,
        "useDeepPartial": true,
        "num64": "bigint",
        "customTypes": {
          "useCosmosSDKDec": true,
          "useEnhancedDecimal": false
        },
        "useTelescopeGeneratedType": true,
        "autoFixUndefinedEnumDefault": true
      }
    },
    "bundle": {
      "enabled": true,
      type: "module"
    },
    "stargateClients": {
      "enabled": false
    },
    "lcdClients": {
      "enabled": false
    },
    "rpcClients": {
      "enabled": false
    },
    "helperFunctions": {
      "enabled": true,
      "useGlobalDecoderRegistry": true,
      "hooks": {
        "react": false,
        "vue": false
      },
      nameMappers: {
        Query: {
          "cosmos.tx.v1beta1.GetTx": {
            funcBody: "unchanged"
          },
          "cosmos.tx.v1beta1.GetTxsEvent": {
            funcBody: "unchanged"
          },
          "cosmos.tx.v1beta1.GetBlockWithTxs": {
            funcBody: "unchanged"
          },
        },
      },
    },
    "interfaces": {
      "enabled": true,
      "useGlobalDecoderRegistry": true,
      "registerAllDecodersToGlobal": false,
      "useUnionTypes": true
    },
    "aminoEncoding": {
      "enabled": true,
      "useLegacyInlineEncoding": false,
      "disableMsgTypes": false,
      "useProtoOptionality": true,
      "customTypes": {
        "useCosmosSDKDec": true
      }
    }
  }
};

// rimraf(join(__dirname, '../libs/cosmos-types/src'));
// rimraf(join(__dirname, '../libs/interchainjs/src'));
// rimraf(join(__dirname, '../libs/interchain-vue/src'));
// rimraf(join(__dirname, '../libs/interchain-react/src'));
// rimraf(join(__dirname, '../libs/injectivejs/src'));
// rimraf(join(__dirname, '../libs/injective-vue/src'));
// rimraf(join(__dirname, '../libs/injective-react/src'));

// cosmos-types
telescope({
  protoDirs: [join(__dirname, '../protos/interchainjs')],
  outPath: join(__dirname, '../libs/cosmos-types/src'),
  options: deepmerge(options.options, {
    "prototypes": {
      "enableRegistryLoader": false,
      "enableMessageComposer": false,
      "includes": {
        "protos": [
          "cosmos/vesting/v1beta1/vesting.proto",
          "cosmos/tx/v1beta1/service.proto",
          "cosmos/tx/signing/v1beta1/signing.proto",
          "cosmos/tx/v1beta1/tx.proto",
          "cosmos/tx/v1beta1/service.proto",
          "injective/types/v1beta1/account.proto",
          "cosmos/auth/v1beta1/auth.proto",
          "cosmos/auth/v1beta1/query.proto",
          "cosmos/bank/v1beta1/bank.proto",
          "cosmos/bank/v1beta1/query.proto",
          "cosmos/gov/v1beta1/gov.proto",
          "cosmos/gov/v1beta1/query.proto",
          "cosmos/staking/v1beta1/staking.proto",
          "cosmos/staking/v1beta1/query.proto",
          "cosmos/crypto/secp256k1/keys.proto",
          "cosmos/crypto/ed25519/keys.proto",
          "cosmos/crypto/multisig/keys.proto"
        ]
      },
      "methods": {
        "fromJSON": false,
        "toJSON": false,
        "encode": true,
        "decode": true,
        "fromPartial": true,
        "toAmino": false,
        "fromAmino": false,
        "fromProto": false,
        "toProto": false,
      },
    },
    "interfaces": {
      "enabled": false
    },
    "aminoEncoding": {
      "enabled": false
    },
    "stargateClients": {
      "enabled": false
    },
    "lcdClients": {
      "enabled": false
    },
    "rpcClients": {
      "enabled": false
    }
  })
})
  .then(() => {
    console.log('✨ all done!');
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });

// // interchainjs
// telescope({
//   protoDirs: [join(__dirname, '../protos/interchainjs')],
//   outPath: join(__dirname, '../libs/interchainjs/src'),
//   options: options.options
// })
//   .then(() => {
//     console.log('✨ all done!');
//   })
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   });

// // interchain-vue
// telescope({
//   protoDirs: [join(__dirname, '../protos/interchainjs')],
//   outPath: join(__dirname, '../libs/interchain-vue/src'),
//   options: deepmerge(options.options, {
//     "helperFunctions": {
//       "hooks": {
//         "vue": true
//       }
//     },
//   }),
// })
//   .then(() => {
//     console.log('✨ all done!');
//   })
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   });

// // interchain-react
// telescope({
//   protoDirs: [join(__dirname, '../protos/interchainjs')],
//   outPath: join(__dirname, '../libs/interchain-react/src'),
//   options: deepmerge(options.options, {
//     "helperFunctions": {
//       "hooks": {
//         "react": true
//       }
//     },
//   }),
// })
//   .then(() => {
//     console.log('✨ all done!');
//   })
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   });

// // injectivejs
// telescope({
//   protoDirs: [join(__dirname, '../protos/injectivejs')],
//   outPath: join(__dirname, '../libs/injectivejs/src'),
//   options: options.options
// })
//   .then(() => {
//     console.log('✨ all done!');
//   })
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   });

// // injective-vue
// telescope({
//   protoDirs: [join(__dirname, '../protos/injectivejs')],
//   outPath: join(__dirname, '../libs/injective-vue/src'),
//   options: deepmerge(options.options, {
//     "helperFunctions": {
//       "hooks": {
//         "vue": true
//       }
//     },
//   }),
// })
//   .then(() => {
//     console.log('✨ all done!');
//   })
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   });

// // injective-react
// telescope({
//   protoDirs: [join(__dirname, '../protos/injectivejs')],
//   outPath: join(__dirname, '../libs/injective-react/src'),
//   options: deepmerge(options.options, {
//     "helperFunctions": {
//       "hooks": {
//         "react": true
//       }
//     },
//   }),
// })
//   .then(() => {
//     console.log('✨ all done!');
//   })
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   });
