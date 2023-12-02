import React from "react";
import useLogin from "../hooks/useLogin";
import useField from "../hooks/useField";

const LoginComponent = ({ setIsAuthenticated }) => {
  const emailField = useField("text");
  const passwordField = useField("password");
  const { handleLogin } = useLogin(setIsAuthenticated);

  const handleLoginClick = () => {
    handleLogin(emailField.value, passwordField.value);
  };

  return (
    <div>
      <h2>Login</h2>
      <label>
        Username:
        <input {...emailField} />
      </label>
      <br />
      <label>
        Password:
        <input {...passwordField} />
      </label>
      <br />
      <button onClick={handleLoginClick}>Log In</button>
    </div>
  );
};

export default LoginComponent;
