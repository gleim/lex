import "AlexArtist.sol";

contract AlexDao {

  address owner;
  mapping (address => address) artistOwnedBy;

  function AlexDao() {
    owner = msg.sender;
  }

  function remove() {
    if (msg.sender == owner) {
      suicide(owner);
    }
  }

  function createArtist(string _name) returns(address artist) {
    artistOwnedBy[msg.sender] = address(new AlexArtist(msg.sender, _name));
    return artistOwnedBy[msg.sender];
  }

  function getArtist() returns(address artist) {
    return artistOwnedBy[msg.sender];
  }
}

