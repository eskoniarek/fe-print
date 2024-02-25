import React, { useState, useEffect } from "react";
import { useSearchParams } from 'next/navigation'; // Correct import for useSearchParams
import { medusaClient } from "@lib/config";

import Button from "@modules/common/components/button";
import Input from "@modules/common/components/input";

const ResetPassword: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [token, setToken] = useState<string>("");  
  const [message, setMessage] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");  
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const searchParams = useSearchParams()

  // Use useEffect to set the token from the URL parameter when the component mounts
  useEffect(() => {
    const urlToken = searchParams.get('token'); // Access 'token' parameter
    if (urlToken) {
      setToken(urlToken);
    }
  }, [searchParams]); // Depend on searchParams for reactivity

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsLoading(true);

    try {
      await medusaClient.customers.resetPassword({
        email, 
        password,
        token,
      });

      setMessage("Password successfully reset!");
    } catch (error: any) { // Assuming error is of type any, adjust as necessary for your project setup
      // Check if the error is specifically related to the token
      if (error?.response?.data?.message.includes("token")) {
        setMessage("Invalid or expired token. Please request a new password reset.");
      } else {
        // For all other errors, keep a generic message or handle differently
        setMessage("Failed to reset password. Please try again later.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 space-y-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input 
          label="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
        />

        <Input
          label="New Password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
          required
          className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
        />
        <Input
          label="Confirm Password" 
          name="confirm"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required  
          className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
        />

        <Input
          label="Token" 
          name="token"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          required  
          className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none"
        />

        <Button type="submit" className="w-full bg-black text-white rounded-md hover:bg-slate-700">Reset Password</Button>
      </form>
      {message && <div className="text-center mt-4 text-slate-600">{message}</div>}
    </div>
  );
};

export default ResetPassword;
