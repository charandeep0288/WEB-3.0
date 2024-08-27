import {generateMnemonic, mnemonicToSeedSync} from "bip39";


const mnemonic = generateMnemonic(128); // 128bits ==gives==> 12 words Mnemonic, 256bits ==gives==> 24 words Mnemonic 
console.log("Generated Mnemonic: ", mnemonic);

const seed = mnemonicToSeedSync(mnemonic); 
console.log("Seed: ", seed); //prints buffer which is equvalent to Uint8Array
console.log("Seed: ", seed.toString('hex')); 


// Example
const mnemonic1 = "arm guitar weather detect left book orbit carry member subway glance excuse"; // 12 words - 128 bits

const seed1 = mnemonicToSeedSync(mnemonic1); 
console.log("Seed: ", seed1.toString('hex'));



// we can generate -> bitcoin address, ETH, SOL addresses using above code 

