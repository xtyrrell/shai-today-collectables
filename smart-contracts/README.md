# The ShaiToday Collectables
An ERC721 smart contract for Shai to mint and sell his daily selfies.

There is basic test coverage (see `test/ShaiToday.js`).

## Get started

### Prerequisites

* You'll need a recent version of `node` installed (try installing it through the [asdf version manager](https://asdf-vm.com) if you haven't installed it yet).

### Get building

1. Clone and setup this project.
  ```sh
  git clone https://github.com/xtyrrell/shai-today-collectables.git
  cd shai-today-collectables
  npm i
  ```

2. (In a seperate terminal) Start a Hardhat Network node to run a development-friendly version of the Ethereum blockhain locally.
  ```sh
  npx hardhat node
  ```

3. Run the tests
  ```sh
  npx hardhat test
  ```

4. Hack on `ShaiToday.sol` or create more contracts!
