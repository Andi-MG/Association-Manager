import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../adapters/auth/authService";
import "./Login.css";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    try {
      const user = await signIn(email, password);
      console.log("User signed in:", user);
      navigate("/dashboard");
    } catch (error) {
      setError("Failed to sign in. Please check your email and password.");
      console.error("Error signing in:", error);
    }
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    handleSubmit(event).catch(console.error);
  };

  return (
      <div className="login-card">
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="email">Email:</label>
          <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="password">Password:</label>
          <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit">Login</button>
        </form>
      </div>
  );
};

export default LoginForm;