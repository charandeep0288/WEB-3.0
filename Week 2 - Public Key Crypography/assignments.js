// Assignment 1
// What is the 11001010 converted to a decimals ?

// Answer:-
// 2^7: 1×27=1×128=128
// 2^6: 1×26=1×64=64
// 2^5: 0×25=0×32=0
// 2^4: 0×24=0×16=0
// 2^3: 1×23=1×8=8
// 2^2: 0×22=0×4=0
// 2^1: 1×21=1×2=2
// 2^0: 0×20=0×1=0
// 128 + 64 + 0 + 0 + 8 + 0 + 2 + 0 = 202


// Assignment 2
// What do you think happens to the first element here? Does it throw an error?
let uint8Arr = new Uint8Array([0, 255, 127, 128]);
uint8Arr[1] = 300;
console.log(uint8Arr); // Uint8Array(4) [ 0, 44, 127, 128 ]


// node assignments.js  
