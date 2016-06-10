contract ArtFactory {
  // internal variables
  address factoryOwner;
  
  // log the Publish events
  event Publish(address art, uint price);

  function ArtFactory() {
    factoryOwner = msg.sender;
  }

  function () {
    new Art(msg.sender, msg.value);
    Publish(msg.sender, msg.value);
  }
}

contract Art {
  address artist;
  uint price;
  uint balance;
  mapping (address => uint) amountPaid;
  mapping (address => bool) purchased;

  // log the Deposit events
  event Deposit(address from, uint amount);

  function Art(address _artist, uint _price) {
    artist = _artist;
    price = _price;
  }

  // default payment mechanism, triggers view rights upon reaching price threshold
  function () {
    // add to value associated with payer
    amountPaid[msg.sender] += msg.value;

    // if reached purchase threshold, set state to purchased
    if (amountPaid[msg.sender] >= price) {
      purchased[msg.sender] = true;
    }

    // add to the contract balance
    balance += msg.value;

    // notify watchers of Deposit event
    Deposit(msg.sender, msg.value);
  }

  // let caller know if they possess viewing rights
  function view() constant returns(bool) {
    // let caller know if we reached purchase threshold
    return purchased[msg.sender];
  }

  // return balance
  function viewBalance() constant returns(uint) {
    if (msg.sender != artist) throw;

    return balance;
  }

  // withdraw complete balance
  function withdraw() returns(uint) {
    if (msg.sender != artist) throw;

    // do not handle the case if send() has been overridden and fails
    if (msg.sender.send(balance)) {
      balance = 0;
    }
    return balance;
  }

  // withdraw up to complete balance
  function withdraw(uint value) returns(uint) {
    if (msg.sender != artist) throw;

    if (value <= balance) {
      // do not handle the case if send() has been overridden and fails
      if (msg.sender.send(value)) {
        balance -= value;
      }
    }
    return balance;
  }
}