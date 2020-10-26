import React, { useState } from "react";
import axios from "axios";
import { Redirect, Route } from "react-router";
import "./Login.css";

export default function Login() {
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return userid.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
    <h1 className="title">Login</h1>
      <form onSubmit={handleSubmit}>
        <label>UserId:</label>
        <input
          type="text"
          value={userid}
          onChange={(e) => setUserid(e.target.value)}
        />
        <label>Password:</label>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Login"/>
      </form>
    </div>
  );
}
