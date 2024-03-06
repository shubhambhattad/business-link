import React, { useState, useRef, useEffect } from "react";
import "./navbar.css";

const Navbar = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  const bodyRef = useRef();

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (bodyRef.current && !bodyRef.current.contains(event.target)) {
        setIsNavActive(false);
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const handleMenuClick = () => {
    setIsNavActive((prevIsNavActive) => !prevIsNavActive);
  };

  return (
    <div ref={bodyRef}>
      <div
        className={`menu-icon ${isNavActive ? "nav-active" : ""}`}
        onClick={handleMenuClick}
      >
        <span className="menu-icon__line menu-icon__line-left"></span>
        <span className="menu-icon__line"></span>
        <span className="menu-icon__line menu-icon__line-right"></span>
      </div>

      <div className={`nav ${isNavActive ? "nav-active" : ""}`}>
        <div className="nav__content">
          <ul className="nav__list">
            <li className="nav__list-item">Home</li>
            <li className="nav__list-item">About</li>
            <li className="nav__list-item">Projects</li>
            <li className="nav__list-item">Contact</li>
          </ul>
        </div>
      </div>

      <div className="site-content">
        <h1 className="site-content__headline">Another menu concept</h1>
      </div>
    </div>
  );
};

export default Navbar;
