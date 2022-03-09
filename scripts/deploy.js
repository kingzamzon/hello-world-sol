// Import ethers from Hardhat package
const { ethers } = require("hardhat");

async function main() {
    /*
    A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts
    */
   const helloContract = await ethers.getContractFactory("HelloWorld");

    //    here we deploy the contract
    const deployedHelloContract = await helloContract.deploy("Hello World");
    
    // Print the address of the deployed contract
    console.log("Hello World Contract Address:", deployedHelloContract.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });