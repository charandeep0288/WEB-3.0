// https://animagraffs.com/how-cryptocurrency-works
// https://andersbrownworth.com/blockchain/
// https://emn178.github.io/online-tools/sha256.html

// https://learnweb3.io/degrees/ethereum-developer-degree/

const crypto = require('crypto');

const input = "100xdevs";
const hash = crypto.createHash('sha256').update(input).digest('hex');

console.log(hash);


// node hash.js