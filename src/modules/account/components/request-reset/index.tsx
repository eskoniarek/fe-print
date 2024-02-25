import React, { useState } from "react";
import { medusaClient } from "@lib/config";
import Button from "@modules/common/components/button";
import Input from "@modules/common/components/input";

const RequestReset: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    console.log("Requesting password reset for email:", email); // Log the attempt
    try {
      await medusaClient.customers.generatePasswordToken({ email });
      setMessage("Password reset link sent. Please check your email.");
      console.log("Password reset link sent successfully to email:", email); // Log on success
    } catch (error: any) {
      console.error("Error during password reset request:", error); // Log the error object
      const errorMessage = error?.response?.data?.message || "Failed to send password reset link.";
      setMessage(errorMessage);
      console.error("Error message during password reset request:", errorMessage); // Log the error message
    } finally {
      setIsLoading(false);
      console.log("Password reset request process completed for email:", email); // Log on completion
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 space-y-4">
      <h1 className="text-slate-800 font-bold text-xl">Reset Password</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
        />
        <div className="flex justify-center">
          <Button type="submit" disabled={isLoading} className="px-4 py-2 font-bold text-white bg-black rounded hover:bg-slate-700 disabled:opacity-50">
            {isLoading ? "Processing..." : "Request Password Reset"}
          </Button>
        </div>
      </form>
      {message && <p className="text-slate-600">{message}</p>}
    </div>
  );
};

export default RequestReset;
