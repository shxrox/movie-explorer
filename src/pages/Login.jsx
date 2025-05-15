import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }


    if (email === "admin@example.com" && password === "password") {
      alert("Login successful!");
    } else {
      setError("Invalid credentials.");
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleLogin} style={styles.form}>
        <h2 style={styles.title}>🔐 Sign In</h2>
        {error && <p style={styles.error}>{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Login
        </button>
        <p style={styles.hint}>Demo: admin@example.com / password</p>
      </form>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff", 
    padding: "20px",
  },
  form: {
    background: "#222222",
    color: "#fff", 
    padding: "40px 30px",
    borderRadius: "12px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
    width: "100%",
    maxWidth: "400px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    marginBottom: "25px",
    fontSize: "24px",
    color: "#fff", 
  },
  input: {
    width: "100%",
    padding: "12px 14px",
    marginBottom: "16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "15px",
    transition: "0.3s ease",
    outline: "none",
  },
  button: {
    width: "100%",
    padding: "12px",
    background: "#000000", 
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background 0.3s ease",
    marginBottom: "15px", 
  },
  error: {
    color: "#d9534f",
    marginBottom: "15px",
    fontSize: "14px",
  },
  hint: {
    marginTop: "12px",
    fontSize: "12px",
    color: "#aaa", 
  },
};

export default Login;
