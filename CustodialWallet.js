const { ethers } = require('ethers');

const mnemonic = 'your mnemonic phrase goes here';

// create a new wallet from the mnemonic
const wallet = ethers.Wallet.fromMnemonic(mnemonic);

// print the wallet address
console.log(wallet.address);
