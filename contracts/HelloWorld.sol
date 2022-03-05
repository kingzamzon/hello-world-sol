// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract HelloWorld {

    event UpdatedMessages(string oldStr, string newStr);

    // declare a state variable message
    string public message;

    constructor(string memory _message) {
        message = _message;
    }

    function update(string memory newMessage) public {
        string memory oldMsg = message;
        message = newMessage;
        emit UpdatedMessages(oldMsg, newMessage);
    }

    function get() public view returns (string memory) {
        return message;
    }
}