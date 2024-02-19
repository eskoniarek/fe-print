import { LOGIN_VIEW, useAccount } from "@lib/context/account-context"
import Button from "@modules/common/components/button"
import Input from "@modules/common/components/input"
import React, { useState } from "react"
import { FieldValues, useForm } from "react-hook-form"

interface SignInCredentials extends FieldValues {
  email: string
}

const Login = () => {
  const { loginView } = useAccount()
  const [_, setCurrentView] = loginView
  const [authError, setAuthError] = useState<string | undefined>(undefined)
  const [linkSent, setLinkSent] = useState<string | undefined>(undefined)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInCredentials>()

  const onSubmit = handleSubmit(async (credentials) => {
    const response = await fetch("http://localhost:9000/store/customers/passwordless/sent", {
        method: "POST",
        body: JSON.stringify(credentials),
        headers: { "Content-Type": "application/json" },
      },
    )

    if (!response.ok) response.json().then((data) => setAuthError(data.message))

    if (response.ok) setLinkSent("Check your email for a login link.")
  })

  return (
    <div className="max-w-sm w-full flex flex-col items-center">
      {!linkSent && (
        <>
          <h1 className="text-large-semi uppercase mb-6">Welcome back</h1>
          <p className="text-center text-base-regular text-gray-700 mb-8">
            Sign in to access an enhanced shopping experience.
          </p>
          <form className="w-full" onSubmit={onSubmit}>

            <div className="flex flex-col w-full gap-y-2">
              <Input
                label="Email"
                {...register("email", { required: "Email is required" })}
                autoComplete="email"
                errors={errors}
              />
            </div>

            {authError && !linkSent && (
              <div className="text-rose-500 w-full text-small-regular mt-2">
                {authError}
              </div>
            )}
            <Button className="mt-6">Enter</Button>
          </form>

          <span className="text-center text-gray-700 text-small-regular mt-6">
            Not a member?{" "}
            <button
              onClick={() => setCurrentView(LOGIN_VIEW.REGISTER)}
              className="underline"
            >
          Join us
        </button>.</span>
        </>
      )}

      {linkSent && (
        <>
          <h1 className="text-large-semi uppercase mb-6">Login link sent!</h1>
          <div className="bg-green-100 text-green-500 p-4 my-4 w-full">
            <span>{linkSent}</span>
          </div>
        </>
      )}
    </div>
  )
}

export default Login