
// -------------------------------------------------------------------------
// Derivation paths
// m/44/0/0 => 1st wallet on bitcoin
// m/44/501/0 => 1st wallet on solana
// m/44/60/0 => 1st wallet on ETH

// m/44/0/1 => 2nd wallet on bitcoin 
// m/44/501/1 => 2st wallet on solana
// m/44/60/1 => 2st wallet on ETH

import nacl from "tweetnacl";
import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";

const mnemonic = generateMnemonic();
const seed = mnemonicToSeedSync(mnemonic);
for (let i = 0; i < 4; i++) {
  const path = `m/44'/501'/${i}'/0'`; // This is the derivation path
  const derivedSeed = derivePath(path, seed.toString("hex")).key;
  const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
  console.log(Keypair.fromSecretKey(secret).publicKey.toBase58());
}