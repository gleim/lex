contract AlexDao {
  function createArtist(string _name) returns(AlexArtist artist) {
    return new AlexArtist(msg.sender, _name);
  }
}

contract AlexArtist {
  // internal variables
  address owner;
  mapping (address => uint) amountPaid;

  // public variables
  string public name;

  // log the Artist creation events
  event ArtistWelcome(address creator, string name);

  // log the Artist paid events
  event ArtistPaid(address creator, uint price);

  function AlexArtist(address _owner, string _name) {
    owner = _owner;
    name = _name;
    ArtistWelcome(owner, name);
  }

  function publishContent(string _name, uint _price) returns(AlexContent content) {
    return new AlexContent(_name, _price);
  }

  // simplest transaction: someone makes a payment
  function() {
    if (msg.value > 0) {
      amountPaid[msg.sender] += msg.value;
      ArtistPaid(msg.sender, msg.value);
    }
  }
}

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
          uint portalPayAmount = msg.value/100;

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
