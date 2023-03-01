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

```
// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Bank {
    mapping(address => uint) balances;

    event Deposit(address user, uint value);
    event Withdraw(address user, uint value);

    constructor() {}

    function deposit() public payable {
        require(msg.value > 0);
        balances[msg.sender] += msg.value;
        emit Deposit(msg.sender, msg.value);
    }

    function getBalance(address add) public view returns (uint) {
        return balances[add];
    }

    function withdraw() public payable {
        uint _balance = getBalance(msg.sender);
        require(_balance > 0);
        balances[msg.sender] = 0;
        payable(msg.sender).transfer(_balance);
        emit Withdraw(msg.sender, _balance);
    }
}

```
