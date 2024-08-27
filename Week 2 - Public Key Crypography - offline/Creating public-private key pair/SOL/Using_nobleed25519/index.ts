// Asymetric Encryption

// Generate Solana public/private keys using - @noble/ed25519
// this is typescript code
// npm install -g typescript
// npm install @noble/ed25519

import * as ed from '@noble/ed25519';

async function main() {
    // Generate a secure random private key
    const privKey = ed.utils.randomPrivateKey();
    console.log("private key:- ", privKey); // 

    // Convert the message "hello world" to a Uint8Array
    const message = new TextEncoder().encode("hello world!");

    // Generate the public key from the private key
    const pubKey = await ed.getPublicKeyAsync(privKey);
    console.log("public key:- ", pubKey); // we see Uint8Array(32) of size 32 by default. and we can also convert this Uint8Array to a string using the toHex() method.

    // Sign the message
    const signature = await ed.signAsync(message, privKey); // async fn, so we have to put await in front of it.

    // Verify the signature
    const isValid = await ed.verifyAsync(signature, message, pubKey); // async fn, so we have to put await in front of it.

    // Output the result
    console.log('isValid:- ', isValid); // Should print `true` if the signature is valid
}

main();

// tsc index.ts