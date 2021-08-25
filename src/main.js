const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('e6134fc42f93d0b9ba9d673a504ff7d28b420a8c22464ad2283c76d262ed009d');
const myWalletAddress = myKey.getPublic('hex');

let calebCoin = new Blockchain();
const tx1 = new Transaction(myWalletAddress, 'public key here', 10);
tx1.signTransaction(myKey);

calebCoin.addTransaction(tx1);

console.log('\n Starting the miner...');
calebCoin.minePendingTransactions(myWalletAddress);
console.log('\n Balance of xavier is', calebCoin.getBalanceOfAddress(myWalletAddress));

//calebCoin.chain[1].transactions[0].amount = 1;
console.log('Is chain valid?', calebCoin.isChainValid());
