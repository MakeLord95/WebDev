import { useState } from "react";
import "./Styles/SignupPage.css";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nationality, setNationality] = useState("");

  const isValidEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isStrongPassword = () => {
    return password.length >= 8;
  };

  return (
    <div className="signup-container">
      <form className="signup-form">
        <div>
          <label htmlFor="email">Email:</label>
          <input
            className={`input ${isValidEmail() ? "success" : ""}`}
            id="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            className={`input ${isStrongPassword() ? "success" : ""}`}
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <label htmlFor="nationality">Nationality:</label>

          <select
            name="nationality"
            onChange={(e) => setNationality(e.target.value)}
            value={nationality}
            className="input"
          >
            <option value="" disabled>
              Select nationality...
            </option>

            <option value="en">English</option>
            <option value="fi">Suomalainen</option>
            <option value="sw">Svenska</option>
          </select>
        </div>

        <p>
          {nationality === "en" && "Hello"}
          {nationality === "fi" && "Terve"}
          {nationality === "sw" && "Hej"}
        </p>
        <p>
          {nationality === "en" && "Your email address is: "}
          {nationality === "fi" && "Sähköpostiosoitteesi on: "}
          {nationality === "sw" && "Din e-postadress är: "}
          {email}
        </p>
      </form>
    </div>
  );
}
