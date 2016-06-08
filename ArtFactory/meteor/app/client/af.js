
Session.setDefault('latestBlock', {});


Template['blockchainStatus'].helpers({
    currentBlock: function () {
        return JSON.stringify(Session.get('latestBlock'), null, 2);
    }
});


Template['deposits'].helpers({
    deposits: function () {
        return Deposits.find({},{sort: {blockNumber: -1}});
    },
    value: function(){
        return web3.fromWei(this.value, 'ether') + ' ether';
    }
});


Template['publications'].helpers({
    publications: function () {
        return Publications.find({},{sort: {blockNumber: -1}});
    },
    value: function(){
        return web3.fromWei(this.value, 'ether') + ' ether';
    }
});


Template['view'].events({
    'click button.view': function (e, template) {
        alert(template.find('input').value +' is attempting to view content.  \nPurchased = '+ ArtFactory.purchased.call({from: template.find('input').value, gas: 50000}));

        if (ArtFactory.purchased.call({from: template.find('input').value, gas: 50000}) == true)
        // this will download the file in absence of an appropriate browser plugin
            window.open('http://localhost:8080/ipfs/QmTca4A43f4kEvzTouvYTegtp6KobixRqweV12NrvwwtFP');

        template.find('input').value = '';
    },
}); 

Template['pay'].events({
    'click button.pay': function (e, template) {
        alert(template.find('input').value +' is '+ ArtFactory.view(template.find('input').value));
        template.find('input').value = '';
    },
}); 

Template['publish'].events({
    'click button.publish': function (e, template) {
        console.log("FORM INPUT: " + template.find('input').value);
        ArtFactory.publish(template.find('input').value, 
                                   {from: web3.eth.accounts[0], gas: 500000}
        );
        var ipfs = window.IpfsApi();
        ipfs.id()
          .then(function (id) {
            console.log('my id is: ', id)
          })
          .catch(function(err) {
            console.log('Fail: ', err)
          })
          
        template.find('input').value = '';
    },
});