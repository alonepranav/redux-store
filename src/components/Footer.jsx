import React from "react";
import { AiFillInstagram, AiFillGithub } from "react-icons/ai";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="text">
        CopyRights &copy; Redux Store [ Developer : Pranav ]
      </div>
      <div className="links">
        <Link to="/about">About Website</Link>
        <a href="http://www.instagram.com/pranavshilavane">
          <AiFillInstagram />
        </a>
        <a href="http://www.github.com/pranavshilavane">
          <AiFillGithub />
        </a>
      </div>
    </footer>
  );
}
