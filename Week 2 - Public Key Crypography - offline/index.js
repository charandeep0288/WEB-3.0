// String to Binary -> https://codebeautify.org/string-binary-converter
let str = "h";
const binaryRepersentation = new TextEncoder().encode(str);

console.log(binaryRepersentation); // Uint8Array(1) [ 104 ]

// const binaryRepersentation = [104];


const arr = new Uint8Array([1919]); // Uint8Array(1) [ 195 ] ; we can't store more that 8 bits, we would ignore all the bits after 8 last bits(111 01111111)
console.log(arr);


// -----------------------------------------------
const publicKey = "KBWbcw9h2iu948nwd8987b920opwsauh";
const bytes = new TextEncoder().encode(publicKey);
console.log(bytes);


// -----------------------------------------------
// Encodings 
const name = "harkirat"; // ascii a-z, A-Z, 0-9

// Encoding -> bunch of bytes

// 01101000 01100001 01110010 01101011 01101001 01110010 01100001 01110100 => e32d, harkirat, 23ukbjioh3newds

// which encoding I am using?



//===============================================================================
// II. HEXA DECIMAL ENCODING
// String to Hex -> https://www.hexator.com/

let y = 12;
console.log(y.toString(16)); // .toString(16) -> 16 here means convert this number to hexadecimal number ; c -> 12

let z = 214; 
console.log(z.toString(16)) // 214 =is-converted-to-bits=> 11010110 =group-of-4-bits-are-used-to-represent-hexadecimal-number=> 1101 0110 =converted-group-of-4-bits-in-hexadecimal-number=> d6

console.log("1".padStart(2, "0")); // '01'
console.log("1".padStart(5, "0")); // '00001'

// -----------------------------
// 1. Array to hex
function arrayToHex(byteArray) {
    let hexString = '';
    // [h, e, l, l, o]
    for(let i = 0 ; i < byteArray.length ; i++) {
        hexString += byteArray[i].toString(16).padStart(2, '0');
    }

    return hexString;
}

// Example usage:
const str1 = "hello";
const byteArray1 = new TextEncoder().encode(str1);
const byteArray = new Uint8Array([72, 101, 108, 111]); // Corresponds to "Hello", H -> 72, e -> 101, l -> 108, l -> 108, o -> 111
const hexString = arrayToHex(byteArray1);
console.log('hexString:- ', hexString); // 48656c6f

// -----------------------------
// 2. Hex to Array
function hexToArray(hexString) {
    const byteArray = new Uint8Array(hexString.length / 2);
    for(let i = 0 ; i < byteArray.length ; i++) {
        byteArray[i] = parseInt(hexString.substr(i * 2, 2), 16);
    }

    return byteArray;
}

// Example usage:
const hex = "48656c6c6f";
const byteArrayFromHex = hexToArray(hex);
console.log("byteArrayFromHex:- ", byteArrayFromHex);


//===============================================================================
// III. BASE 64 Encoding
// String to Base 64 Encoding -> https://www.base64encode.org/

// -----------------------------
// 1. Encoding 
const uint8Array = new Uint8Array([72, 101, 108, 108, 111]); // hello
const base64Encoded = Buffer.from(uint8Array).toString("base64");
console.log('base64Encoded:- ', base64Encoded); // SGVsbG8= ; when ever we see =(equal to in the Base 62 encoding that means it didn't have all 6 character to create the last byte/character)

// 5 bytes(hello) => 40 bits => ceil(40/6) => 7 


const uint8Array1 = new Uint8Array([72, 101, 108, 108]); // hell
const base64Encoded1 = Buffer.from(uint8Array1).toString("base64");
console.log(base64Encoded1) // SGVsbA== // Base 64 encoding add =(equal to) at the end of the string to make that string multiple of 4, and final string length was not a mutiple of 4, so it added 2=(equal to's).

// 4 bytes(hell) => 32 bits => ceil(32/6) => 6 // 



//===============================================================================
// IV. Base 58

// -----------------------------
// 1. Encoding 
// npm install bs58
const bs58 = require('bs58').default;
function uint8ArrayToBase58(uint8Array) {
    return bs58.encode(uint8Array);
}

// Example usage:
const byteArray2 = new Uint8Array([72, 101, 108, 108, 111]); // Corresponds to "Hello"
const base58String = uint8ArrayToBase58(byteArray2);
console.log('Base 58 Encoding:- ', base58String); // 9Ajdvzr ; Output: Base58 encoded string,

// -----------------------------
// 2. Decoding
function base58ToUint8Array(base58String) {
    return bs58.decode(base58String);
}

// Example usage:
const base58 = base58String;
const byteArrayFromBase58 = base58ToUint8Array(base58);
console.log('byteArrayFromBase58:- ', byteArrayFromBase58); // Output: Uint8Array(5) [72, 101, 108, 108, 111]
 


//===============================================================================
// Hashing vs encryption


// -----------------------------
// Symetric encryption Example
const crypto = require('crypto');

// Generate a random encryption key
const key = crypto.randomBytes(32); // 32 bytes = 256 bits
const iv = crypto.randomBytes(16); // Initialization vector (IV)

// Function to encrypt text
function encrypt(text) {
    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}

// Function to decrypt text
function decrypt(encryptedText) {
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
    let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

const textToEncrypt = 'Hello, World!!';
const encryptedText = encrypt(textToEncrypt);
const decryptedText = decrypt(encryptedText);

console.log("Original Text: ", textToEncrypt); // Hello, World!!
console.log("Encypted Text: ", encryptedText); // ef263669fd1ad040b4292c35ad350541
console.log("Decryped Text: ", decryptedText); // Hello, World!!


// SHA-256 Hashing Algo Convertor
// https://emn178.github.io/online-tools/sha256.html

// Symetric Encryption - AES Encryption Algo
// https://www.devglan.com/online-tools/aes-encryption-decryption


// node index.js