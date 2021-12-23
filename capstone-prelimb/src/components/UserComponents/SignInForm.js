import React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Button } from "@mui/material";

function SignInForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const auth = getAuth();

    try {
      const { email, password } = e.target.elements;
      await signInWithEmailAndPassword(auth, email.value, password.value);
    } catch (e) {
      alert("ERROR: " + e.message);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="email"
          style={{ display: "block", margin: "10px" }}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          style={{ display: "block", margin: "10px" }}
        />
        <Button variant='contained' type="submit" style={{ margin: "10px" }}>
          LOGIN
        </Button>
      </form>
    </div>
  );
}

export default SignInForm;
