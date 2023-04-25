import "./Navbar.css";
import React, { useState, useEffect } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import Web3 from "web3";
import newLogo from "../images/NewLogo.png";
import axios from "axios";

function Navbar() {
  const web3 = new Web3(window.ethereum);

  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
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
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    googleLogout();
    setProfile(null);
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
          <button className="metamask-button" onClick={metamaskButtonHandler}>
            Metamask
          </button>
        </li>
        <li>
          <button className="navbar-button">Home</button>
        </li>
        <li>
          <button className="navbar-button">About</button>
        </li>
        <li>
          <button className="navbar-button">Explore</button>
        </li>
        <li>
          <button className="navbar-button">Contact</button>
        </li>
        {profile ? (
          <div className="navbar-login">
            {/* <img src={profile.picture} alt="user image" />  Showing the profile image (doesn't work for now)*/}
            {/* <h3>User Logged in</h3> */}
            <p>{profile.name}</p>
            {/* <p>{profile.email}</p> */}
            <button className="navbar-logout-button" onClick={logOut}>
              Sign Out
            </button>
          </div>
        ) : (
          <button className="navbar-login-button" onClick={() => login()}>
            Sign In with Google{" "}
          </button>
        )}

        {/* <GoogleLogin onSuccess={responseMessage} onError={errorMessage} /> */}
      </ul>
    </nav>
  );
}

export default Navbar;
