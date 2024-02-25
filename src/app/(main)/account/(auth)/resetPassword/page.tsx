import ResetPasswordTemplate from "@modules/account/templates/reset-password-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Password Reset",
  description: "Reset password for your Printinc account.",
}

export default function PasswordReset() {
  return <ResetPasswordTemplate />
}
