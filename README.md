# The ShaiToday Collectables
An ERC721 smart contract for Shai to mint and sell his daily selfies with a Next.js frontend.

See `smart-contracts/README.md` for information on the ShaiToday smart contract.
See `website/README.md` for information on the Next.js frontend.

## Roadmap

Smart contracts (phase 1)
- [x] Implement ERC721 contract to facilitate minting, owning and transferring selfies
- [x] Write basic tests
- [ ] Deploy and test on Rinkeby
- [ ] Deploy to mainnet
- [ ] Manually mint some selfies

Website (phase 1)
- [x] Implement a basic website to browse photos using Airtable as an API
- [ ] Setup read-only web3 integration using `web3` or `ethers.js`, so we can see who owns each photo.
- [ ] Implement voting for selfies (stored off-chain)
  - Add field "votes" to Airtable
  - Anyone can vote as much as they want, at any time -- there are no restrictions per account
- [ ] Setup Cloudflare Worker serverless Node.js app to proxy requests to Airtable

OpenSea (phase 1)
- [ ] Setup OpenSea integration. See https://docs.opensea.io/docs/getting-started

Cron (phase 2)
- [ ] Setup a scheduled process that can access an Ethereum node and can sign as Shai. This may be a Cloudflare Worker on a cron.
- [ ] Every day at 12 noon, pull today's selfie from the Airtable. If it doesn't exist, penalise Shai somehow. If it does exist, mint that selfie (maybe pull someone off a queue and mint it to them?).

### Selfie ownership
Let's first get the contract to be able to tell us who owns each of the photos pulled from Airtable. Then, display that data
in the app frontend underneath each photo.

- [x] Build a gallery view which shows all photos (filter by tags coming later)
- [ ] Use web3-react to allow users to connect their MetaMask accounts https://codesandbox.io/s/web3-react-simplified-kj7n3?file=/src/index.js (other wallet integrations later)
  - [ ] Simplify that example to only have what we need for MetaMask integration
  - [ ] Copy and paste it in
  - [ ] Test the provider and `useX` pattern
  - [ ] When that's working, display a connect button with the connection status in a position: sticky bar with `top: 0` floating between the carousel at the top and the gallery below
  - [ ] Display the connected address and network name in white monospace text (Kovan etc) with a green background when connected, otherwise a greyish background with the connect button and explainer text
- [ ] Make super simple contract with a public mapping of ids to owners so we can test displaying owners from the contract underneath gallery photos
- [ ] Make it more ERC721 or custom :eyes:
