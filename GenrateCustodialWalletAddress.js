
const { Currency,generateAddressFromXPub} = require("@tatumio/tatum");


async function genratePubKey(){
    const btcAddress1 = generateAddressFromXPub(Currency.ETH, false, "xpub6EbE59w2J9cB2SQmNyWkAmMVkNbsgY8uk9RPgxKJ3YYTpeiS9hW7HMz4j4yMDqw6SLPii7qBaY1EstcXjWAHsYUBHTFvEAitzxWztXb5u9d", 1);
    console.log(btcAddress1);

    const btcAddress2 = generateAddressFromXPub(Currency.ETH, false, "xpub6EbE59w2J9cB2SQmNyWkAmMVkNbsgY8uk9RPgxKJ3YYTpeiS9hW7HMz4j4yMDqw6SLPii7qBaY1EstcXjWAHsYUBHTFvEAitzxWztXb5u9d", 2);
    console.log(btcAddress2);
}
genratePubKey();

