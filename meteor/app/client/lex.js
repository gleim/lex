
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
    'click button.guess': function (e, template) {
        alert(template.find('input').value +' is '+ LexContentInstance.view(template.find('input').value));
        template.find('input').value = '';
    },
    'click button.set': function (e, template) {
        LexContentInstance.publish(template.find('input').value, {from: web3.eth.accounts[0], gas: 50000});
        template.find('input').value = '';
    },
    'click a.switch': function (e, template) {
        TemplateVar.set('publications', !TemplateVar.get('publications'));
    }
});