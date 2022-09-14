const bitcoin = require("bitcoinjs-lib");
const ecpair = require("ecpair");
const tinysecp = require("tiny-secp256k1");

const ECPair = ecpair.ECPairFactory(tinysecp);
const keyPair = ECPair.makeRandom();
const publicKey = keyPair.publicKey;
console.log("publicKey:", publicKey);

const { address } = bitcoin.payments.p2pkh({ pubkey: publicKey });
console.log("address:", address);

// Print your private key (in WIF format)
const privateKey = keyPair.toWIF();
console.log("privateKey:", privateKey);