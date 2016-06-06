contract AlexContent {
	// internal variables
	address owner;
	mapping (address => uint) amountPaid;
	mapping (address => bool) paid;

	// public variables
	string public name;
	uint public price;

  	// log the Publish events
  	event LexPublish(address creator, string name, uint price);
  
  	// log the Deposit events
  	event LexDeposit(address from, uint value);
  
  	// content creation
	function AlexContent(string _name, uint _price) {
		owner = msg.sender;
		name = _name;
		price = _price; // zero if not provided
		LexPublish(msg.sender, name, price);
	}

	// simplest transaction: someone makes a payment
    function() {
        if (msg.value > 0) {
        	amountPaid[msg.sender] += msg.value;
        	if (amountPaid[msg.sender] >= price) {
        		paid[msg.sender] = true;
        	}
            LexDeposit(msg.sender, msg.value);
        }
    }

    function publish() {
		LexPublish(owner, name, price);
    }

	function purchased() constant returns(bool purchased) {
		return paid[msg.sender];
	}

}
