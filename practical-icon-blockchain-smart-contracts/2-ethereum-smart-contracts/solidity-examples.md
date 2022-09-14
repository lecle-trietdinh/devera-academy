## Hello World

"Hello World" smart contract

1. Create file `hello-world.sol`

```
// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
contract HelloWorld {
    function helloWorld() public pure returns (string memory) {
        return "Hello World";
    }
}
```

2. Compile contract 
3. Deploy contract 
3. Interact With the Smart Contract

## Simple Storage
Contract will allow us to store an unsigned integer and retrieve it. 

## Simple Bank
A simple bank
- Deposit ether into bank
- Withdraw ether from bank
- The balance of the user