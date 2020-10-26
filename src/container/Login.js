import React, { useState, useEffect } from "react";
import axios from "axios";
import { Redirect, Route } from "react-router";
import "./Login.css";

export default function Login() {
  const [accountId, setUserid] = useState("");
  const [pswd, setPassword] = useState("");
  const [userstatus, setUserstatus] = useState(false);
  const [token, setUsertoken] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUserstatus(true);
    }
  }, []);

  function validateForm() {
    return accountId.length > 0 && pswd.length > 0;
  }

  // login the user
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { accountId, pswd };
    console.log(user);
    // send the username and password to the server
    const response = await axios
      .post("https://apertum-interview.herokuapp.com/api/user/login", user, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        setUsertoken(res.data.token);
        setUserstatus(true);
      })
      .catch((err) => {
        console.log(err);
        setUserstatus(false);
      });
    // store the usertoken in localStoragex
    localStorage.setItem("token", JSON.stringify(token));
  };

  return (
    <div className="Login">
      <h1 className="title">Login</h1>
      <form onSubmit={handleSubmit}>
        <label>UserId:</label>
        <input
          type="text"
          value={accountId}
          onChange={(e) => setUserid(e.target.value)}
        />
        <label>Password:</label>
        <input
          type="password"
          value={pswd}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* <input type="submit" value="Login"/> */}
        <button type="submit" disabled={!validateForm()}>
          Login
        </button>
      </form>
    </div>
  );
}
