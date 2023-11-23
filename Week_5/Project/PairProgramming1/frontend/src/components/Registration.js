import { useState } from "react";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const ApiUrl = "http://localhost:5000/api/users";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const user = {
      email,
      password,
      name,
    };
    console.log(user);

    fetch(ApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      // .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status === 200) {
          alert("User created successfully");
        } else {
          alert("Something went wrong");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="login-page">
      <h2>Register</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Username</label>
        <input
          value={name}
          name="name"
          id="name"
          placeholder="Username"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="******"
          id="password"
          name="password"
        />
        <label htmlFor="confirmPassword">Confirm password</label>
        <input
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
          placeholder="******"
          id="confirmPassword"
          name="confirmPassword"
        />

        <button className="submit-button" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Registration;
