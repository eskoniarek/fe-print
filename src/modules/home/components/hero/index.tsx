import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-[70vh] w-full relative bg-gradient-to-r from-[#1D2B64] to-[#F8CDDA]">
      <div className="text-white absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-32">
        <h1 className="text-2xl-semi mb-4 drop-shadow-md shadow-black">
          Discover bold artistry with Demo's latest in Art and Photography
        </h1>
        <p className="text-base-regular max-w-[32rem] mb-6 drop-shadow-md shadow-black">
          Designs that define your space with style and imagination. Prepare to be enchanted.
        </p>
        <UnderlineLink href="/store">Explore products</UnderlineLink>
        </div>
        </div>
  )
}

export default Hero
