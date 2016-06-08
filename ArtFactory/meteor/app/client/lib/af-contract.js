contractCode = '60606040525b33600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055505b6104318061003f6000396000f360606040523615610053576000357c010000000000000000000000000000000000000000000000000000000090048063075d4782146100bb57806313e0bb76146100ca578063bd0af85d146100f657610053565b6100b95b60003411156100b6577ffa6bdd0777c16cc90c806ec137da708a2639c4dd5ba0a5747ec575b5b7d511cf3334604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a15b5b565b005b6100c86004805050610117565b005b6100e0600480803590602001909190505061037b565b6040518082815260200191505060405180910390f35b61011560048080359060200190919080359060200190919050506101a3565b005b34600160005060003373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050819055507f74b1cba7c7bb0f41a5cb9b9470931c8f97e3885ab24644421b3cecdd85b415f83334604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a15b565b600060006000341115610374576064340491508373ffffffffffffffffffffffffffffffffffffffff166000833403604051809050600060405180830381858888f19350505050508273ffffffffffffffffffffffffffffffffffffffff16600083604051809050600060405180830381858888f19350505050507f90cc97ea8b07abb7d1675c4f5a658cd5af4653e28f5adf54bea12dfe3aff6289833384604051808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff168152602001828152602001935050505060405180910390a1600260005060008573ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000509050348160000160005060003373ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828282505401925050819055507f5548c837ab068cf56a2c2479df0882a4922fd203edb7517321831d95078c5f62843334604051808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff168152602001828152602001935050505060405180910390a15b5b50505050565b60006000600260005060008473ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000509050600160005060008473ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050548160000160005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005054101515610422576001915061042b565b6000915061042b565b5091905056';

ArtFactoryContract = web3.eth.contract([{"constant":false,"inputs":[],"name":"publish","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"art","type":"address"}],"name":"view","outputs":[{"name":"result","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"recipient","type":"address"},{"name":"portal","type":"address"}],"name":"pay","outputs":[],"type":"function"},{"inputs":[],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"art","type":"address"},{"indexed":false,"name":"price","type":"uint256"}],"name":"Publish","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"to","type":"address"},{"indexed":false,"name":"from","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"to","type":"address"},{"indexed":false,"name":"from","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"PortalPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"from","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"FactoryContribution","type":"event"}]);

var contractInstance = ArtFactoryContract.new({from: web3.eth.accounts[0], gas: 500000, data: contractCode});
// ^-- copy and paste resulting created address into at( ) below

//ArtFactory = ArtFactory.at('0x316214ffc53f5c3ea23d03509073fc7818338865');
//ArtFactory.address;

/*

To send money to the contract use:

    web3.eth.sendTransaction({from: web3.eth.accounts[1], to: '0x316214ffc53f5c3ea23d03509073fc7818338865' ,value: 123000000000})

	contractInstance.purchased({from: web3.eth.accounts[1]});

	contractInstance.purchased({from: web3.eth.accounts[2]});

*/


