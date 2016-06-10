// get the latest block
web3.eth.filter('latest').watch(function(e, blockHash) {
    if(!e) {
        web3.eth.getBlock(blockHash, function(e, block){
            Session.set('latestBlock', block);
        });
    }
});



/* move to Artist DApp

// Check if money arrived
// Note checking from block 0 is very unperformant!
Art.Deposit({},{fromBlock: 0, toBlock: 'latest'}).watch(function(e, log) {
    if(!e) {
        console.log('Money arrived! From:'+ log.args.from, log.args.value.toString(10));

        // add the transaction to our collection
        Deposits.upsert('tx_'+ log.transactionHash ,{
            from: log.args.from,
            value: log.args.value.toString(10),
            blockNumber: log.blockNumber
        });
    }
});

*/


// Check if somebody set a number
ArtFactory.Publish({}).watch(function(e, log) {
    if(!e) {
        console.log('New content was published at block #'+ log.blockNumber);
        alert('New content ' + log.args.name + ' was published at block #'+ log.blockNumber + ' Deposit ' + log.args.price + ' to view!');

        // add the transaction to our collection
        Publications.upsert('tx_'+ log.transactionHash ,{
            creator: log.args.creator,
            name: log.args.name,
            price: log.args.price.toString(10),
            blockNumber: log.blockNumber
        });
    }
});
