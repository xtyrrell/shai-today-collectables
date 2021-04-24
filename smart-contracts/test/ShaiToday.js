const { expect } = require("chai")
const { ethers } = require("hardhat")

describe("ShaiToday contract", () => {
  // Define these variables here for convenience so we can access them
  // in our tests
  const itemId = 1

  let ShaiToday
  let shaiToday
  let owner, otherAddress1, otherAddress2

  beforeEach(async () => {
    ShaiToday = await ethers.getContractFactory("ShaiToday")
    shaiToday = await ShaiToday.deploy()

    ;[owner, otherAddress1, otherAddress2] = await ethers.getSigners()
  })

  describe("Deployment", () => {
    it("should set the right owner", async () => {
      expect(await shaiToday.owner()).to.equal(owner.address)
    })
  })

  describe("Minting and ownership", () => {
    it("should allow the owner to mint an item", async () => {
      await shaiToday.connect(owner).safeMint(owner.address, itemId)
  
      const itemOwner = (await shaiToday.connect(owner).ownerOf(itemId)).toString()
      return expect(itemOwner).to.equal(owner.address)
    })

    it("should allow non-owners to read token owner", async () => {
      await shaiToday.connect(owner).safeMint(owner.address, itemId)
  
      const retrievedValue = (await shaiToday.connect(otherAddress1).ownerOf(itemId)).toString()
      return expect(retrievedValue).to.equal(owner.address)
    })
  
    it("should prevent non-owners from minting an item", async () => {
      return expect(shaiToday.connect(otherAddress1).safeMint(otherAddress1.address, itemId))
        .to.be.revertedWith("Ownable: caller is not the owner")
    })
  })

  describe("Transferring", () => {
    it("should allow an item's owner to transfer that item to another address", async () => {
      await shaiToday.connect(owner).safeMint(owner.address, itemId)

      await shaiToday.safeTransferFrom()
  
      const itemOwner = (await shaiToday.connect(owner).ownerOf(itemId)).toString()
      return expect(itemOwner).to.equal(owner.address)
    })

    it("should allow an item's owner to transfer that item to another address", async () => {
      await shaiToday.connect(owner).safeMint(owner.address, itemId)
  
      const itemOwner = (await shaiToday.connect(owner).ownerOf(itemId)).toString()
      return expect(itemOwner).to.equal(owner.address)
    })
  })

  describe("Metadata", () => {
    it("should return the correct token URI", async () => {
      await shaiToday.connect(owner).safeMint(owner.address, itemId)
  
      const tokenURI = (await shaiToday.connect(owner).tokenURI(itemId)).toString()
      return expect(tokenURI).to.equal("https://shai.today/api/token/1")
    })
  })
})
