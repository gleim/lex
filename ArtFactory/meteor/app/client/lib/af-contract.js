ArtFactoryContractCode = '60606040525b33600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055505b61056e8061003f6000396000f360606040523615600d57600d565b60a95b33346040516104c3806100ab833901808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050604051809103906000f0507f74b1cba7c7bb0f41a5cb9b9470931c8f97e3885ab24644421b3cecdd85b415f83334604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a15b565b0060606040526040516040806104c3833981016040528080519060200190919080519060200190919050505b81600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff02191690830217905550806001600050819055505b5050610453806100706000396000f36060604052361561005e576000357c0100000000000000000000000000000000000000000000000000000000900480632e1a7d4d1461018b5780633ccfd60b146101b75780633ff1e05b146101da578063bac74aec146101fd5761005e565b6101895b34600360005060003373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082828250540192505081905550600160005054600360005060003373ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000505410151561011f576001600460005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908302179055505b3460026000828282505401925050819055507fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c3334604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a15b565b005b6101a1600480803590602001909190505061038a565b6040518082815260200191505060405180910390f35b6101c460048050506102d4565b6040518082815260200191505060405180910390f35b6101e76004805050610266565b6040518082815260200191505060405180910390f35b61020a6004805050610220565b6040518082815260200191505060405180910390f35b6000600460005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050610263565b90565b6000600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156102c457610002565b60026000505490506102d1565b90565b6000600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561033257610002565b3373ffffffffffffffffffffffffffffffffffffffff166000600260005054604051809050600060405180830381858888f193505050501561037a5760006002600050819055505b6002600050549050610387565b90565b6000600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156103e857610002565b60026000505482111515610441573373ffffffffffffffffffffffffffffffffffffffff16600083604051809050600060405180830381858888f1935050505015610440578160026000828282505403925050819055505b5b600260005054905061044e565b91905056';

ArtContractCode = '60606040526040516040806104c3833981016040528080519060200190919080519060200190919050505b81600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff02191690830217905550806001600050819055505b5050610453806100706000396000f36060604052361561005e576000357c0100000000000000000000000000000000000000000000000000000000900480632e1a7d4d1461018b5780633ccfd60b146101b75780633ff1e05b146101da578063bac74aec146101fd5761005e565b6101895b34600360005060003373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082828250540192505081905550600160005054600360005060003373ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000505410151561011f576001600460005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908302179055505b3460026000828282505401925050819055507fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c3334604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a15b565b005b6101a1600480803590602001909190505061038a565b6040518082815260200191505060405180910390f35b6101c460048050506102d4565b6040518082815260200191505060405180910390f35b6101e76004805050610266565b6040518082815260200191505060405180910390f35b61020a6004805050610220565b6040518082815260200191505060405180910390f35b6000600460005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050610263565b90565b6000600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156102c457610002565b60026000505490506102d1565b90565b6000600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561033257610002565b3373ffffffffffffffffffffffffffffffffffffffff166000600260005054604051809050600060405180830381858888f193505050501561037a5760006002600050819055505b6002600050549050610387565b90565b6000600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156103e857610002565b60026000505482111515610441573373ffffffffffffffffffffffffffffffffffffffff16600083604051809050600060405180830381858888f1935050505015610440578160026000828282505403925050819055505b5b600260005054905061044e565b91905056';

ArtFactoryContract = web3.eth.contract([{"inputs":[],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"art","type":"address"},{"indexed":false,"name":"price","type":"uint256"}],"name":"Publish","type":"event"}]);

ArtContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"value","type":"uint256"}],"name":"withdraw","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"viewBalance","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"view","outputs":[{"name":"","type":"bool"}],"type":"function"},{"inputs":[{"name":"_artist","type":"address"},{"name":"_price","type":"uint256"}],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"from","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Deposit","type":"event"}]);

var ArtFactoryContractInstance = ArtFactoryContract.new({from: web3.eth.accounts[0], gas: 500000, data: ArtFactoryContractCode});
// ^-- copy and paste resulting created address into at( ) below

ArtFactory = ArtFactoryContract.at('0xad17b2216138bde883b16c590285fad1e2259080');
//ArtFactory.address;

/*

// ^-- send ether directly to ArtFactory from wallet to create ArtContract instance,
// view publication via Events published to DApp UI

// test scenario - nominal
// roles:

// web3.eth address			role 				hex address

// accounts[0] 				factory owner	
// accounts[1] 				artist
// accounts[2]				purchaser/viewer

// a. validate art creation (via publish Event consumption)
// b. validate cannot be viewed without purchase
// c. purchase
// d. validate can be viewed after purchase
// e. validate artist withdraws funds

// end.

*/

//ArtContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"value","type":"uint256"}],"name":"withdraw","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"viewBalance","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"view","outputs":[{"name":"","type":"bool"}],"type":"function"},{"inputs":[{"name":"_artist","type":"address"},{"name":"_price","type":"uint256"}],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"from","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Deposit","type":"event"}]);
// ^-- copy and paste resulting created address into at( ) below


//Art = ArtContract.at('0x1d73a07c1e4bb45f475cbe225c64c64d82f4cda1');
//Art.address;

// obsoleted
////var pendingTxHash_0x01 = ArtFactory.publish("SampleVideo_0x01.mp4", 5000, {from: web3.eth.accounts[1], gas: 500000});

// ^-- copy and paste resulting created hash into [http://testnet.etherscan.io/tx/ ] to retrieve 0x01 contract hash

//Art_0x01 = ArtContract.at('0xf74db1aaa0b0c308a29a02f4becdc82eddaf40b8');
//Art_0x01.address;

// obsoleted
////var pendingTxHash_0x02 = ArtFactory.publish("SampleVideo_0x02.mp4", 10000, {from: web3.eth.accounts[2], gas: 500000});

// ^-- copy and paste resulting created hash into [http://testnet.etherscan.io/tx/ ] to retrieve 0x02 contract hash

//Art_0x02 = ArtContract.at('0xf74db1aaa0b0c308a29a02f4becdc82eddaf40b8');
//Art_0x02.address;


//var ArtContractInstance_0x00 = ArtFactoryContract.new("SampleVideo_0x00.mp4", 10000, {from: web3.eth.accounts[0], gas: 500000, data: ArtContractCode});
// ^-- copy and paste resulting created address into at( ) below

//Art_0x00 = ArtContract.at('0xf74db1aaa0b0c308a29a02f4becdc82eddaf40b8');
//Art_0x00.address;

//var ArtContractInstance_0x01 = ArtFactoryContract.new("SampleVideo_0x01.mp4", 10000, {from: web3.eth.accounts[0], gas: 500000, data: ArtContractCode});
// ^-- copy and paste resulting created address into at( ) below

//Art_0x01 = ArtContract.at('0x7c5dee021974917b5ae5853dc5621963c7cea46a');
//Art_0x01.address;

/*

	// roles:
	//   artist:    				web3.eth.accounts[0]			0x0f9b5b4646215e05fbedbdbb0244e198249da962
	//   purchaser: 				web3.eth.accounts[1]			0x73980ec32994d2263281a19e47b916f186703e1c
	//   unpermissioned viewer: 	web3.eth.accounts[2]			0xf2a6552699eb99da7ec789e00fc3dd7545acccbb

To send money to the contract use:

	Art_0x00 = ArtContract.at('0x40bee3f1eea13c77500918176e9c4232e431db48');

	Art_0x00.view(web3.eth.accounts[0], {from: web3.eth.accounts[1]});

	Art_0x00.pay(web3.eth.accounts[0], {from: web3.eth.accounts[1], value: 1200})

	Art_0x00.view(web3.eth.accounts[0], {from: web3.eth.accounts[1]});

	Art_0x00.view(web3.eth.accounts[0], {from: web3.eth.accounts[2]});

*/


