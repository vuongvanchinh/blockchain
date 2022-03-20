// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract SimpleContract {
  string public name;
  address private owner;

  constructor() {
    name = "name";
    owner = msg.sender;
  }

  event nameEvent (string evPram);

  modifier onlyOwner() {
    require(msg.sender == owner);
    _;
  }

  function getName() public view returns (string memory) {
    return name;
  }

  function changeName(string memory _name) public onlyOwner {
    name = _name;
    emit nameEvent(name);
  }
}
