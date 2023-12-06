import { Metadata } from "next"
import ContactTemplate from "@modules/contact/templates"

export const metadata: Metadata = {
  title: "Contact",
  description: "Feel free to reach out.",
}

export default function ContactPage() {
   
  return (
    <>
      <ContactTemplate />
    </>
  )
}
