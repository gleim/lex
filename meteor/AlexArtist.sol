import "AlexContent.sol";

contract AlexArtist {
  // internal variables
  address owner;
  mapping (address => uint) amountPaid;

  // public variables
  string public name;

  // log the Artist creation events
  event ArtistWelcome(address artist, string name);

  // log the Artist paid events
  event ArtistPaid(address creator, string name, uint price);

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

      ArtistPaid(owner, name, msg.value);
    }
  }
}

