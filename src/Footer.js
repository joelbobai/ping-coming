import React from "react";
import "./footer.css";
import {
  FacebookLogo,
  TwitterLogo,
  InstagramLogo,
} from "@phosphor-icons/react";
function Footer() {
  return (
    <footer className="footer">
      <div className="socials">
        <a
          className="socials__icon-container"
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookLogo
            className="socials__icon fab fa-facebook-f"
            weight="fill"
          />
        </a>
        <a
          className="socials__icon-container"
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterLogo className="socials__icon fab fa-twitter" weight="fill" />
        </a>
        <a
          className="socials__icon-container"
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramLogo
            className="socials__icon fab fa-instagram"
            weight="fill"
          />
        </a>
      </div>
      <p className="copyright">&copy; Copyright Ping. All rights reserved.</p>
      <p className="attribution">
        Challenge by{" "}
        <a
          className="attribution__anchor"
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noopener noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          className="attribution__anchor"
          href="https://github.com/Samolote"
          target="_blank"
          rel="noopener noreferrer"
        >
          James Wandiya
        </a>
        .
      </p>
    </footer>
  );
}

export default Footer;
