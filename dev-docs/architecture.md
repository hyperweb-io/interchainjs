Ok, based on the thoughts, now we can start to do the architecture file.

Should include:
- mostly follow, change unless necessary, UniSigner and related types in the architeture-thoughts.md
- and for cosmos part, look at the networks/cosmos and docs as your reference, try to fit the current design of the components in to this new one
- and for Ethererum, look at the networks/ethereum(SignerFromPrivateKey, SignerFromBrowser and related, no EIP712), abstract the logic as networks/cosmos did