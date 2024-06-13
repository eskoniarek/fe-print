import Link from "next/link"
import Image from "next/image"
import UnderlineLink from "@modules/common/components/underline-link"

const Hero = () => {
  return (
    <div className="h-[90vh] w-full relative">
      <div className="text-white absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-32">
        <h1 className="text-2xl-semi mb-4 drop-shadow-md shadow-black">
        Unleash Your Imagination with PrintInc's Cutting-Edge AI: 
        </h1>
        <h1 className="text-2xl-semi mb-4 drop-shadow-md shadow-black">
          Elevate Your Art and Photography to Stunning New Heights!        
          </h1>    
         <UnderlineLink href="https://ai.printinc.shop/">Start Creating Now</UnderlineLink>
      </div>
      <Image
        src="/hero.jpg"
        loading="eager"
        priority={true}
        quality={90}
        alt="Photo by @hendrikmorkel https://unsplash.com/@hendrikmorkel"
        className="absolute inset-0"
        draggable="false"
        fill
        sizes="75vw"
        style={{
          objectFit: "cover",
        }}
      />
    </div>
  )
}

export default Hero
