pragma solidity ^0.4.2;

contract DappToken {
  // contructor
  // Set the total number of tokens
  // Read the total number of tokens
  uint256 public totalSupply;

  function DappToken () public {
    totalSupply = 1000000; // state variable
  }
}