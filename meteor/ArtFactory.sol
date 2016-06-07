/// @title ArtFactory
/// @author gleim

contract ArtFactory { 
	// internal variables

    // art factory creator
	address factoryOwner;
	
    //map addresses to balances
    mapping (address => uint) private balances;

	// number of publications per artist
	mapping (address => uint) numberPublications;

	// address+index -> publication name
	mapping (string => string) publicationName;
	
	// address+index -> publication price
	mapping (string => uint) publicationPrice;

	// [artist_address+publication_index][purchaser_address] provides payment amount from address toward content
	uint[][] amountPaid;

    // Events - publicize Deposit actions to external listeners
    event Deposit(address accountAddress, uint amount);

    // Events - publicize Payment actions to external listeners
    event Payment(address from, address to, string publicationName, uint amount);

    // Events - publicize Publish actions to external listeners
  	event Publish(address artist, string publicationName, uint price);
  
    // Constructor, can receive one or many variables here; only one allowed
    function ArtFactory() {
        factoryOwner = msg.sender;
    }

    /// @notice Deposit ether into art factory
    /// @return The balance of the user after the deposit is made
    function deposit() public returns (uint) {
    	// record the deposit
        balances[msg.sender] += msg.value;

        DepositMade(msg.sender, msg.value); // fire event

        return balances[msg.sender];
    }

    /// @notice Withdraw ether from art factory
    /// @param withdrawAmount amount to withdraw
    /// @return The balance remaining for the user
    function withdraw(uint withdrawAmount) public returns (uint remainingBal) {
        if(balances[msg.sender] >= withdrawAmount) {
            balances[msg.sender] -= withdrawAmount;

            if (!msg.sender.send(withdrawAmount)) {
                // to be safe, may be sending to contract that
                // has overridden 'send' which may then fail
                balances[msg.sender] += withdrawAmount;
            }
        }

        return balances[msg.sender];
    }

    /// @notice Get balance
    /// @return The balance of the user
    function balance() constant returns (uint) {
        return balances[msg.sender];
    }

    // Fallback function - Called if other functions don't match call or
    // sent ether without data
    // Typically, called when invalid data is sent
    // Added so ether sent to this contract is reverted if the contract fails
    // otherwise, the sender's money is transferred to contract
    function () {
        throw; // throw reverts state to before call
    }

    // suggested by chriseth for address to byte conversion
	function toBytes(address x) returns (bytes b) {
	    b = new bytes(20);
	    for (uint i = 0; i < 20; i++)
	        b[i] = byte(uint8(uint(x) / (2**(8*(19 - i)))));
	}
  	
  	// content creation
	function publish(string name, uint price) {
		// set artist to initiator of transaction
		address artist = msg.sender;

		// increment number of publications by this artist
		numberPublications[artist] += 1; 

		// determine index based on address and number of publications
		index = string(toBytes(artist));

		// store publication name
		publicationName[index] = name;

		// store publication price
		publicationPrice[index] = price;

		Publish(msg.sender, name, price);
	}

}

