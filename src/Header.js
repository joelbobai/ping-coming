import React from "react";
import "./header.css";
function Header() {
  return (
    <header className="header">
      <img
        className="header__logo"
        src="https://wandiya.github.io/ping-coming-soon-page/images/logo.svg"
        alt="PING. logo"
      />
      <h1 class="header__title">
        <span className="light-font">We are launching</span> soon!
      </h1>
      <p className="header__description">Subscribe and get notified</p>
    </header>
  );
}

export default Header;
