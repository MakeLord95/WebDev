import React, { useState } from "react";
import useSignup from "../hooks/useSignup";
import useField from "../hooks/useField";

const SignupComponent = ({ setIsAuthenticated }) => {
  const emailField = useField("text");
  const passwordField = useField("password");
  const password2Field = useField("password");
  const [error, setError] = useState("");
  const { handleSignup } = useSignup(setIsAuthenticated);

  const handleSignUpClick = () => {
    if (passwordField.value !== password2Field.value) {
      setError("Passwords do not match");
      return;
    }

    setError("");
    handleSignup(emailField.value, passwordField.value);
  };

  return (
    <div>
      <h2>Signup</h2>
      <label>
        Email:
        <input {...emailField} />
      </label>
      <br />
      <label>
        Password:
        <input {...passwordField} />
      </label>
      <br />
      <label>
        Confirm Password:
        <input {...password2Field} />
      </label>
      <br />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={handleSignUpClick}>Sign Up</button>
    </div>
  );
};

export default SignupComponent;
