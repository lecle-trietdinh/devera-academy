# Building A Simple Blockchain In Node.js
Tutorial for Buiding A Simple Blockchain In Node.js

## Block

- Install `crypto-js`
```
npm install --save crypto-js
```

- Create `block.js`, 
- Define Block class
```
//create a JavaScript class to represent a Block
class Block {
  constructor(index, timestamp, data, previousHash) {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = this.generateHash();
  }

  generateHash() {
    return SHA256(this.index + this.timestamp + this.previousHash + JSON.stringify(this.data)).toString();
  }
}
```

- Export class
```
module.exports = Block;
```

## Blockchain

- Create `blockchain.js`
- Import Block class
```
const Block = require('./block');
```

- Define Blockchain class
```
class Blockchain {
  constructor() {
    this.blockchain = [this.createGenesisBlock()];
    this.difficulty = 4;
  }
  createGenesisBlock() {
    return new Block(0, "2022-09-02", "first block on the chain", "0");
  }
  getTheLatestBlock() {
    return this.blockchain[this.blockchain.length - 1];
  }
  addNewBlock(newBlock) {
    newBlock.previousHash = this.getTheLatestBlock().hash;
    newBlock.hash = newBlock.generateHash();
    this.blockchain.push(newBlock);
  }
}
```

## Check The Blockchain’s Validity

- Add `validateValidity()` to `Blockchain` class
```
  validateValidity() {
    for (let i = 1; i < this.blockchain.length; i++) {
      const currentBlock = this.blockchain[i];
      const previousBlock = this.blockchain[i - 1];
      if (currentBlock.hash !== currentBlock.generateHash()) {
        return false;
      }
      if (currentBlock.previousHash !== previousBlock.hash) {
        return false;
      }
      return true;
    }
  }
```

## Check The Blockchain’s Validity
- Add `nonce` property to `Block` constructor
```
    this.nonce = 0;
```

- Add `proofOfWork` function to `Block` 
```
  proofOfWork(difficulty) {
    while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
      this.nonce++;
      this.hash = this.generateHash();
    }
  }
```

- Add `difficult` to `Blockchain` constructor
```
    this.difficulty = 4;
```

- Update `addNewBlock` function
```
    // newBlock.hash = newBlock.generateHash();
    newBlock.proofOfWork(this.difficulty);
```

## Block time and difficulty adjustment

- Add default block time as Blockchain property
```
 this.blockTime = 10000; // milisecond
```

- Adjust difficulty by block time to `addNewBlock`
```
this.difficulty += (Date.now() - new Date(newBlock.timestamp).getTime()) > this.blockTime ? -1 : 1;
``` 