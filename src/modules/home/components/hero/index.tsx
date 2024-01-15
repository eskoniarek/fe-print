import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-[90vh] w-full relative">
      <div className="text-white absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-32">
        <h1 className="text-2xl-semi mb-4 drop-shadow-md shadow-black">
          Discover bold artistry with PrintInc's latest in Art and Photography
        </h1>
        <p className="text-base-regular max-w-[32rem] mb-6 drop-shadow-md shadow-black">
          Designs that define your space with style and imagination. Prepare to be enchanted.
        </p>
        <UnderlineLink href="/store">Explore products</UnderlineLink>
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
