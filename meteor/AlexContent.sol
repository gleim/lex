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
  
  	// log the PortalPaid events
  	event PortalPaid(address portal, uint value);
  
  	// content creation
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

	// portal-facilitated transaction: portal receives part of payment
    function pay(address _portal) {
        if (msg.value > 0) {
        	const uint portalPayAmount = msg.value/100;

        	// one percent to referring portal
        	_portal.send(portalPayAmount);

        	// send notification portal has been paid
        	PortalPaid(_portal, portalPayAmount);

        	amountPaid[msg.sender] += msg.value;
        	if (amountPaid[msg.sender] >= price) {
        		paid[msg.sender] = true;
        	}

        	// send notification deposit is complete
            Deposit(msg.sender, msg.value);
        }
    }

    function publish() {
		Publish(owner, name, price);
    }

	function purchased() constant returns(bool purchased) {
		return paid[msg.sender];
	}

}
