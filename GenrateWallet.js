const {generateWallet, Currency} = require("@tatumio/tatum");
async function GenrateWallet(){
    const btcWallet = await generateWallet(Currency.ETH, false);
    console.log(btcWallet);
}

GenrateWallet(); 
// Genrate xpub key in wallet and mnemonic