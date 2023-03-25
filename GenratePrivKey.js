// Replace <<mnemonic>> with xpub you've got from step 2
const {generatePrivateKeyFromMnemonic, Currency} = require("@tatumio/tatum");

async function genratePrivate(){
    const btcPrivateKey = await generatePrivateKeyFromMnemonic(Currency.ETH, false, "derive dizzy system rescue used unusual symptom unknown cactus sleep mix cabbage elevator trophy right wedding mixture vivid bus help supreme surge laptop dial", 1);
    console.log(btcPrivateKey);
}

genratePrivate();