import AboutTemplate from "@modules/about/templates"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Our Story.",
}

const About = () => {
  return (
    <>
      <AboutTemplate />
    </>
  )
}

export default About
