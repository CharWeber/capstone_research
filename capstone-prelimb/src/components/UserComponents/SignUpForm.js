import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUpForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const auth = getAuth();


    try {
      const { email, password } = e.target.elements;
      await createUserWithEmailAndPassword(auth, email.value, password.value);
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
        <button type="submit" style={{ margin: "10px" }}>
          Sign Up
        </button>
      </form>
    </div>
  );
}