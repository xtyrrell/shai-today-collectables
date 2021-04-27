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
- [ ] Test the ERC721 item ownership in the contract (not minting yet)
- [ ] Using ethers, pull in the data on the owner of each photo when displaying the frontend
