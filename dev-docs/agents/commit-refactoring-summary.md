

## Test Results Update

After fixing codec issues, all 5 getCommit RPC tests are now passing:
- PASS: getCommit() without height returns latest commit (564 ms)
- PASS: getCommit(height) returns commit at specific height (548 ms)  
- PASS: getCommit() should have valid signatures (552 ms)
- PASS: getCommit() should match block height (1132 ms)
- PASS: getCommit() for different heights should have different block IDs (1136 ms)

### Key Fixes Applied
1. **Type Converter Issues**: Fixed fromHex and fromBase64 to handle unknown input types
2. **Undefined Value Handling**: 
   - BlockHeaderCodec: Handle missing version.app field (defaults to 0)
   - BlockIdCodec: Handle missing parts.total (defaults to 0)
   - CommitSignatureCodec: Handle null validator addresses and signatures
3. **TypeScript Compatibility**: Fixed RPC test file to handle optional properties correctly
