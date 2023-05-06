import "./Navbar.css";
import React, { useState, useEffect } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import Web3 from "web3";
import newLogo from "../images/NewLogo.png";
import defaultPofilePicture from "../images/DefaultProfile.png";
import axios from "axios";

function Navbar() {
  const web3 = new Web3(window.ethereum);

  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [profile, setProfile] = useState(null);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      setUser(codeResponse);
      localStorage.setItem("user", JSON.stringify(codeResponse));
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  const logOut = () => {
    googleLogout();
    setProfile(null);
    localStorage.removeItem("user");
    window.location.reload();
  };

  async function metamaskButtonHandler() {
    try {
      // Request account access if needed
      await window.ethereum.enable();
      // Get user account address
      const accounts = await web3.eth.getAccounts();
      alert(`Logged in with account: ${accounts[0]}`);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">
          <img src={newLogo} className="AppNewLogo" alt="logo" />
        </a>
      </div>
      <div className="navbar-search">
        <input
          type="text"
          placeholder="Search"
          className="navbar-search-input"
        />
      </div>
      <ul className="navbar-links">
        <li>
          <a href="/">
            <button className="navbar-button">Home</button>
          </a>
        </li>
        <li>
          <a href="/about">
          <button className="navbar-button">About</button>
          </a>
        </li>
        <li>
          <button className="navbar-button">Explore</button>
        </li>
        <li>
          <button className="navbar-button">Contact</button>
        </li>
        <li>
          <button className="metamask-button" onClick={metamaskButtonHandler}>
            Metamask
          </button>
        </li>
        {profile ? (
          <div className="navbar-login">
            <img
              className="navbar-login-picture"
              src={profile.picture}
              alt={defaultPofilePicture}
            />
            <li className="navbar-login-name"> {profile.name}</li>
            <button className="navbar-logout-button" onClick={logOut}>
              Sign Out
            </button>
          </div>
        ) : (
          <button className="navbar-login-button" onClick={() => login()}>
            Sign In with Google{" "}
          </button>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
