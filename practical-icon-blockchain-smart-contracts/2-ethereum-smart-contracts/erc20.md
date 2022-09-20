# ERC-20

https://eips.ethereum.org/EIPS/eip-20

https://ethereum.org/en/developers/docs/standards/tokens/erc-20/

## Inteface

```
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

interface IERC20 {
    function name() public view returns (string)
    function symbol() public view returns (string)
    function decimals() public view returns (uint8)
    function totalSupply() public view returns (uint256)
    function balanceOf(address _owner) public view returns (uint256 balance)
    function transfer(address _to, uint256 _value) public returns (bool success)
    function transferFrom(address _from, address _to, uint256 _value) public returns (bool success)
    function approve(address _spender, uint256 _value) public returns (bool success)
    function allowance(address _owner, address _spender) public view returns (uint256 remaining)
}
```
