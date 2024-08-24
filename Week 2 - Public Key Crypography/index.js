// Bit
const x = 0; // if "x" can only be 0 or 1.
console.log('Bit:- ' + x);

// Byte
const a = 202; // range of number of 0 to 255
console.log('Byte:- ' + a);

// Array of bytes
const bytes = [202, 244, 1, 23]; // In JS we can repesent bytes using this, but problem is each one of this number is taking a lot of space, so we use Uint8Array
console.log('Bytes:- ', bytes);


// UInt8Array - A better way to represent an array of bytes is to use a UInt8Array in JS
let UInt8ArrayBytes = new Uint8Array([0, 255, 127, 128]); // binary reperstation of [0, 255, 127, 128] => 00000000, 11111111, 01111111, 10000000
console.log('UInt8Array example 1:- ', UInt8ArrayBytes);

let UInt8ArrayBytes1 = new Uint8Array([0, 3030, 127, 128]);
console.log('UInt8Array example 2:- ',  UInt8ArrayBytes1); // Uint8Array(4) [ 0, 214, 127, 128 ]

let UInt8ArrayBytes2 = new Uint8Array([0, 256, 127, 128]);
console.log('UInt8Array example 3:- ',  UInt8ArrayBytes2); // Uint8Array(4) [ 0, 0, 127, 128 ]


//===============================================================================
// I. ASCII

// -----------------------------
// 1. Bytes to Ascii
function bytesToAscii(byteArray) {
    return byteArray.map(byte => String.fromCharCode(byte)).join('');
}

// Example usage:
const bytes_01 = [72, 101, 108, 108, 111]; // Corresponds to "Hello", H -> 72, e -> 101, l -> 108, l -> 108, o -> 111
const asciiString = bytesToAscii(bytes_01);
console.log('Bytes to Ascii:- ', asciiString);


// -----------------------------
// 2. Ascii to bytes
function asciiToBytes(asciiString) {
    const byteArray = [];
    for(let i = 0 ; i < asciiString.length ; i++) {
        byteArray.push(asciiString.charCodeAt(i));
    }
    return byteArray;
}

// Example usage:
const ascii = "Hello";
const byteArray = asciiToBytes(ascii);
console.log('Ascii to bytes:- ',  byteArray); // Output: [72, 101, 108, 108, 111]


// -----------------------------
// 3. UInt8Array to ascii (Bytes to Text)
function bytesToAscii_03(byteArray) {
    return new TextDecoder().decode(byteArray);
}

// Example usage:
const bytes_03 = new Uint8Array([72, 101, 108, 108, 111]); // Corresponds to "Hello", H -> 72, e -> 101, l -> 108, l -> 108, o -> 111
const asciiString_03 = bytesToAscii_03(bytes_03);
console.log('UInt8Array to ascii (Bytes to Text):- ' + asciiString_03);


// -----------------------------
// 4. Ascii to UInt8Array (Text to Bytes)
function asciiToBytes_04(asciiString) {
    return new Uint8Array([...asciiString].map(char => char.charCodeAt(0)));
}

// Example usage:
const asciiString_04 = "Hello";
const bytesArray_04 = asciiToBytes_04(asciiString_04);
console.log('Ascii to UInt8Array (Text to Bytes):- ', bytesArray_04);


// node index.js
