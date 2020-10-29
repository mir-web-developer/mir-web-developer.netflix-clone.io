import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
        //@ts-ignore
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png"
        alt="Netflix Logo"
      />
      <img
        className="nav__avatar"
        src="https://i1.wp.com/oxsci.org/wp-content/uploads/2019/05/SMILE.png?fit=1024%2C1024&ssl=1"
        alt=""
      />
    </div>
  );
}

export default Nav;
