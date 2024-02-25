"use client"

import React, { useEffect } from 'react';
import { useAccount } from "@lib/context/account-context";
import { useRouter } from "next/navigation";
import  ResetPassword from "@modules/account/components/reset-password";

const ResetPasswordTemplate = () => {
  const { customer } = useAccount();
  const router = useRouter();

  useEffect(() => {
    if (customer) {
      // Redirect to profile or dashboard if already logged in
      router.push('/account/profile');
    }
  }, [customer, router]);

  return < ResetPassword />;
};

export default ResetPasswordTemplate;
