async function main() {
  const userAddress = "0x4A002C276B137CA7342b7E340a9818842ee479Dd"
  const contractAddress = "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9"

  const ShaiToday = await ethers.getContractFactory("ShaiToday")
  const shaiToday = await ShaiToday.attach(contractAddress)

  // await shaiToday.safeMint(userAddress, 37)

  const balance = await shaiToday.balanceOf(userAddress)
  console.log(`balance of user: ${balance}`)
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
