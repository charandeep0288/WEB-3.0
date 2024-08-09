// assignment 1
const crypto = require('crypto');

function findHashWithPrefix(hashPrefix) {
    let input = 596139;
    while(true) {
       let inputStr = input.toString();
       let hash = crypto.createHash('sha256').update(inputStr).digest('hex');
       if(hash.startsWith(hashPrefix))
            return {input: inputStr, hash: hash};

       input++;
    }
}

// const result = findHashWithPrefix('00000'); 
// console.log(`Input nonce: ${result.input}`);
// console.log(`Hash: ${result.hash}`);

//  There can be multiple answers:- 
// Input nonce: 596138
// Hash: 00000691457f4f0ce13e187b9ab4fda6d42c8647752909b8f71f9dbd8f6bd4ab
// Input nonce: 665782
// Hash: 0000000399c6aea5ad0c709a9bc331a3ed6494702bd1d129d8c817a0257a1462
// Input nonce: 1134816
// Hash: 000001f8479faf79c1a58152ffc6b027a93f6ae6b27dc19ef986b2c9e7cad3b3

// const result1 = findHashWithPrefix('000000000'); // this is proof of work trying to find the soln for a very difficult problem(we are doing some work to find the soln for a string that start with some no. of zero's[defined by bitcoin creators]).
 


// assignment 2
function findHashWithPrefixandHashPrefix(prefix, hashPrefix) {
    let input = 0;
    while(true) {
        let inputStr = prefix + input.toString();
        let hash = crypto.createHash('sha256').update(inputStr).digest('hex');
        if(hash.startsWith(hashPrefix))
            return {input: inputStr, hash: hash};
        input++;
    }
}

// let result2 = findHashWithPrefixandHashPrefix('100xdevs', '0000');
// console.log(`Input nonce: ${result2.input}`);
// console.log(`Hash: ${result2.hash}`);
// Input nonce: 100xdevs27245
// Hash: 00002bda7326b111ba2395e3fe92ac993db3a6af26dde8c3db3f9f92f7c6c9d6


// assignment 3

let result3 = findHashWithPrefixandHashPrefix(`harkirat => Raman | Rs 100
Ram =. Ankit | Rs 10`, '0000');
console.log(`Input nonce: ${result3.input}`);
console.log(`Hash: ${result3.hash}`);

/* Input nonce: 
harkirat => Raman | Rs 100
Ram =. Ankit | Rs 1039429

Hash: 0000c3f1100750521f42af14dec9cb9f9a4b1f00be877c460243236b9cd57467 */



