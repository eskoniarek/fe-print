import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

const FooterCTA = () => {
  return (
    <div className="bg-slate-950 w-70">
      <div className="content-container flex flex-col-reverse gap-y-8 small:flex-row small:items-center justify-between py-16 relative">
        <div className="text-white">
          <h3 className="text-2xl-semi">Design art by yourself! </h3>
 <div className="mt-6">
   <UnderlineLink href="https://ai.printinc.shop/">Printinc AI</UnderlineLink>
 </div>
 <br/>
 <h3 className="text-2xl-regular">...or get inspired by</h3>
          <div className="mt-6">
            <UnderlineLink href="/store">Our Showcase</UnderlineLink>
          </div>
        </div>

        <div className="relative w-full aspect-square small:w-[30%] small:aspect-[28/36]">
          <Image
            src="/cta.png"
            alt="theme"
            className="absolute inset-0"
            fill
            sizes="70vw"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default FooterCTA
