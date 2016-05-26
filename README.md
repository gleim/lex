# lex
Ethereum DApp for Universal Library (Alexandria protocol)

## Getting started

Start a geth node on a testnet:

    $ geth --rpc --testnet --unlock 0,1,2 --rpcaddr="localhost" --rpcport="8545" --rpccorsdomain="http://127.0.0.1:3000" console 

Install IPFS via instructions at https://ipfs.io/docs/install/

Start IPFS:

	$ ipfs daemon

Add high definition video file to IPFS (e.g., http://bit.ly/1jBpTUJ):

	$ ipfs add -q <filename>.mp4 | tail -n1

Set resulting IPFS hash as variable `vidhash`:

	$ export vidhash=<ipfshash>

Unit test local video player:

	$ mplayer http://localhost:8080/ipfs/$vidhash

	