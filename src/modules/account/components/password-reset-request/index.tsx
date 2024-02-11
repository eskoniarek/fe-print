import React, { useState } from "react";
import { medusaClient } from "@lib/config";
import Button from "@modules/common/components/button";
import Input from "@modules/common/components/input";

const PasswordResetRequest: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await medusaClient.customers.generatePasswordToken({ email });
      setMessage("Password reset link sent. Please check your email.");
    } catch (error) {
      setMessage("Failed to send password reset link.");
    }
  };

  return (
    <div>
      <h1>Reset Password</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button type="submit">Request Password Reset</Button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default PasswordResetRequest;
