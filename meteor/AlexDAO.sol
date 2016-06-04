import "AlexArtist.sol";

contract AlexDao {
  function createArtist(string _name) returns(AlexArtist artist) {
    return new AlexArtist(msg.sender, _name);
  }
}

