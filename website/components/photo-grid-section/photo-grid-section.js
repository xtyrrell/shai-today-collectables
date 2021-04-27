import { useEffect, useState } from "react"

import ShimmerBox from "../shimmer-box/shimmer-box"
import PhotoGrid from "../photo-grid/photo-grid"

import { todayFormatted } from "../../utils/date"

console.log(todayFormatted())

const PhotoGridSection = ({ photos }) => {
  const [ totalSupply, setTotalSupply ] = useState()

  useEffect(() => {
    async function fetchTotalSupply() {
      // setup ethers
      // const provider = 
      // const contract = new ethers.Contract()
      // setTotalSupply(await contract.totalSupply())
      await new Promise((res, rej) => setTimeout(res, 1000))
      setTotalSupply(21)
    }
    fetchTotalSupply()
  }, [])

  return (
    <section>
      <h1>Previously</h1>
      {/* <p>
        Coming soon: All of these selfies of Shai will be up for sale as ERC721 collectable NFTs. The price of each
        is dynamically determined by the underlying contract's bonding curve.
      </p> */}
      {/* <p>
        There are currently <ShimmerBox data={totalSupply} hint="20" /> selfies of Shai owned by the <a href="https://shai.today">shai.today</a> community.
      </p> */}
      <PhotoGrid photos={photos.filter(photo => photo.date !== todayFormatted())} />
    </section>
  )
}

export default PhotoGridSection
