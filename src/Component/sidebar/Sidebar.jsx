import React from "react";
import "./sidebar.css";
import Nav from "./nav/Nav";
import SocialMedia from "./socialmedia/SocialMedia";
import Button from "@material-ui/core/Button";

import Resume from "../../assets/resume/ayat rashid9.pdf";

const sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="myPic">
        <a href="#home">
          <img className="myimg" alt="img" src={require("./ayat12.jpeg")} />
        </a>
      </div>

      <Nav />
      <SocialMedia />
      <Button>
        <a href={Resume}>Download Resume</a>
      </Button>
    </div>
  );
};

export default sidebar;
