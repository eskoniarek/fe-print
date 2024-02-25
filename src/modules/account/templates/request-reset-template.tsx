"use client"

import React, { useEffect } from 'react';
import { useAccount } from "@lib/context/account-context";
import { useRouter } from "next/navigation";
import RequestReset from "@modules/account/components/request-reset";

const RequestResetTemplate = () => {
  const { customer } = useAccount();
  const router = useRouter();

  useEffect(() => {
    if (customer) {
      // Redirect to profile or dashboard if already logged in
      router.push('/account/profile');
    }
  }, [customer, router]);

  return <RequestReset />;
};

export default RequestResetTemplate;
