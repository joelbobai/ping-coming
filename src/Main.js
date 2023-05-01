import React from "react";
import "./main.css";
function Main() {
  return (
    <main className="main-content">
      <form className="form" novalidate="true">
        <input
          className="form__input"
          type="text"
          placeholder="Your email address..."
          pattern=""
          required
        />
        <button className="form__button">Notify me</button>
      </form>
      <img
        className="main-content__image"
        src="https://wandiya.github.io/ping-coming-soon-page/images/illustration-dashboard.png"
        alt="Illustrated dashboard"
      />
    </main>
  );
}

export default Main;
