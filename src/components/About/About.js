import React from "react";
import "./About.css";
import profile from "../../image/profile.png";

function About() {
  return (
    <div className="About">
      <h1>About Me</h1>
      <p>
        <img id="profile" src={profile} alt="profile" height="280" /> My name is Xiaoyu Yuan. I  am a managing partner of Rain Times inc. I am also  a successful independent investor, who bought my first stock in my mother's account as a teenager. In the past 6  years I have achieved 20% compounded annual return in my own portfolio. We would like to bring the same kind of return for our investors.
      </p>
  
    </div>
  );
}

export default About;
