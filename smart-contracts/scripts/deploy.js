async function main() {
  const ShaiToday = await ethers.getContractFactory("ShaiToday")
  console.log("Deploying ShaiToday...")

  const shaiToday = await ShaiToday.deploy()
  await shaiToday.deployed()

  console.log(`ShaiToday deployed to ${shaiToday.address}`)
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
