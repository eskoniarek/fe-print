import { LOGIN_VIEW, useAccount } from "@lib/context/account-context"
import Button from "@modules/common/components/button"
import Input from "@modules/common/components/input"
import Link from "next/link"
import { useState } from "react"
import { FieldValues, useForm } from "react-hook-form"

interface RegisterCredentials extends FieldValues {
  email: string
}

const Register = () => {
  const { loginView } = useAccount()
  const [_, setCurrentView] = loginView
  const [authError, setAuthError] = useState<string | undefined>(undefined)
  const [linkSent, setLinkSent] = useState<string | undefined>(undefined)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterCredentials>()

  const onSubmit = handleSubmit(async (credentials) => {
    credentials.isSignUp = true
    const response = await fetch("http://localhost:9000/store/customers/passwordless/sent", {
        method: "POST",
        body: JSON.stringify(credentials),
        headers: { "Content-Type": "application/json" },
      },
    )

    if (!response.ok) response.json().then((data) => setAuthError(data.message))

    if (response.ok) setLinkSent("Check your email to activate your account.")
  })

  return (
    <div className="max-w-sm flex flex-col items-center mt-12">
      {!linkSent && (
        <>

          <h1 className="text-large-semi uppercase mb-6">Become a PrintInc Shop Member</h1>
          <p className="text-center text-base-regular text-gray-700 mb-4">
            Create your PrintInc Shop profile, and get access to an enhanced shopping
            experience.
          </p>
          <form className="w-full flex flex-col" onSubmit={onSubmit}>
            <div className="flex flex-col w-full gap-y-2">
              <Input
                label="Email"
                {...register("email", { required: "Email is required" })}
                autoComplete="email"
                errors={errors}
              />
            </div>
            {authError && (
              <div>
            <span className="text-rose-500 w-full text-small-regular">
              {authError}
            </span>
              </div>
            )}
          <span className="text-center text-gray-700 text-small-regular mt-6">
          By creating an account, you agree to Printinc&apos;s{" "}
          <Link href="/pp" className="underline">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="/tc" className="underline">
            Terms of Use
          </Link>
          .
        </span>
        <Button className="mt-6">Join</Button>
          </form>
          <span className="text-center text-gray-700 text-small-regular mt-6">
        Already a member?{" "}
            <button
              onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
              className="underline"
            >
          Sign in
        </button>
        .
      </span></>
      )}

      {linkSent && (
        <>
          <h1 className="text-large-semi uppercase mb-6">Registration complete!</h1>
          <div className="bg-green-100 text-green-500 p-4 my-4 w-full">
            <span>{linkSent}</span>
          </div>
        </>
      )}
    </div>
  )
}

export default Register