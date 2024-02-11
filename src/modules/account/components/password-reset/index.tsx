import React, { useState } from "react";
import { medusaClient } from "@lib/config";
import Button from "@modules/common/components/button";
import Input from "@modules/common/components/input";

const PasswordReset: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [token, setToken] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await medusaClient.customers.resetPassword({
        email,
        password,
        token,
      });
      setMessage("Password successfully reset.");
    } catch (error) {
      setMessage("Failed to reset password.");
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
        <Input
          label="New Password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Input
          label="Token"
          name="token"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          required
        />
        <Button type="submit">Reset Password</Button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default PasswordReset;
