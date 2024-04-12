import { chains } from "chain-registry";
import fs from "fs";

const entries = chains
  .map((chain) => {
    return [chain.chain_id, chain.bech32_prefix];
  })
  .sort((a, b) => {
    return a[0].localeCompare(b[0]);
  });

const json = Object.fromEntries(entries);
delete json[""];

fs.writeFile(
  __dirname + "../data/prefix.json",
  JSON.stringify(json, void 0, 2),
  (err) => {
    if (err) {
      console.error(err);
    }
  }
);
