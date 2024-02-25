import RequestResetTemplate from "@modules/account/templates/request-reset-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Forgot your password?",
  description: "Request password reset for your Printinc account.",
}

export default function RequestReset() {
  return <RequestResetTemplate />
}
