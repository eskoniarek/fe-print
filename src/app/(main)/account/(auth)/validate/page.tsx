"use client";

import React, { ReactElement, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useAccount } from "@lib/context/account-context"
import Spinner from "@modules/common/icons/spinner"

interface ValidateProps {
    token: string
  }
  
  const Validate: React.FC<ValidateProps> = ({ token }) => {
    const { refetchCustomer, retrievingCustomer, customer } = useAccount()
    const [authError, setAuthError] = useState<string | undefined>(undefined)
    const router = useRouter()

    useEffect(() => {
      if (token) {
        fetch(`http://localhost:9000/store/customers/passwordless/validate?token=${token}`,
          { credentials: "include" })
          .then((response) => {
            if (!response.ok) {
              response.json().then((data) => setAuthError(data.message))
            }
            refetchCustomer()
          })
      }
    }, [refetchCustomer, retrievingCustomer, token])
  

  if (authError) {
    return (
      <div className="flex items-center justify-center w-full min-h-[640px] h-full text-red-600">
        The link to login is invalid or has expired.
      </div>
    )
  }

  if (retrievingCustomer || !customer) {
    return (
      <div className="flex items-center justify-center w-full min-h-[640px] h-full text-gray-900">
        <Spinner size={36} />
      </div>
    )
  }

  if (!retrievingCustomer && customer) {
    router.push("/account")
  }

  return <div></div>
}

export default Validate
