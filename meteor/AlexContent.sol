contract AlexContent {
	// internal variables
	address owner;
	mapping (address => uint) amountPaid;
	mapping (address => bool) paid;

	// public variables
	string public name;
	uint public price;

  	// log the Publish events
  	event Publish(address creator, string name, uint price);
  
  	// log the Deposit events
  	event Deposit(address from, uint value);
  
  	// content creation must include a name, price is optional
	function AlexContent(string _name, uint _price) {
		owner = msg.sender;
		name = _name;
		price = _price; // zero if not provided
		Publish(msg.sender, name, price);
	}

	// simplest transaction: someone makes a payment
    function() {
        if (msg.value > 0) {
        	amountPaid[msg.sender] += msg.value;
        	if (amountPaid[msg.sender] >= price) {
        		paid[msg.sender] = true;
        	}
            Deposit(msg.sender, msg.value);
        }
    }

	function contentPurchased() returns(bool purchased) {
		if (paid[msg.sender]) 
			return true;
		else
			return false;
	}

	function view() returns(bool success) {
		if (paid[msg.sender]) 
			return true;
	}
}
