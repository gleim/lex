contract ArtFactory {
  // internal variables
  address factoryOwner;
  
  // one piece of art per address
  mapping (address => uint) publicationPrice;

  // any piece of art can be purchased by anyone
  struct Purchases { mapping(address => uint) paid; }
  
  // track who has paid and how much per piece of art
  mapping (address => Purchases) amountsPaid;
  
  // log the Publish events
  event Publish(address art, uint price);

  // log the Deposit events
  event Deposit(address to, address from, uint amount);

  // log the Deposit events
  event PortalPaid(address to, address from, uint amount);

  // log the Contribution to Factory events
  event FactoryContribution(address from, uint amount);

  function ArtFactory() {
    factoryOwner = msg.sender;
  }

  function publish() {
    publicationPrice[msg.sender] = msg.value;
	Publish(msg.sender, msg.value);
  }

  // portal-facilitated transaction: portal receives part of payment
  function pay(address recipient, address portal) {
    if (msg.value > 0) {
    	uint portalPayAmount = msg.value/100;

    	recipient.send(msg.value - portalPayAmount);

    	// one percent to referring portal
    	portal.send(portalPayAmount);

    	// send notification portal has been paid
    	PortalPaid(portal, msg.sender, portalPayAmount);

        // extract purchases for the artist
    	Purchases purchases = amountsPaid[recipient];
    	
    	// add purchase to artist purchase record
    	purchases.paid[msg.sender] += msg.value;

    	// send notification deposit is complete
        Deposit(recipient, msg.sender, msg.value);
    }
  }

  // check if sender has paid
  function view(address art) constant returns (bool result) {
    // extract purchases for the artist
	Purchases purchases = amountsPaid[art];
	
	if (purchases.paid[msg.sender] >= publicationPrice[art]) {
	    return true;
	}
	return false;
      
  }

  // simplest transaction: someone contributes to factory
  function() {
    if (msg.value > 0) {
      FactoryContribution(msg.sender, msg.value);
    }
  }
}
