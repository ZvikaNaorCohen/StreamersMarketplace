import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Welcome to Streamers Marketplace</h1>
        <p>
          Unlock the world of exclusive video content with our unique
          marketplace for streamers and viewers. Join us now and experience the future of
          online content!
        </p>
        <a href="/about">
          <button>Learn More</button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
