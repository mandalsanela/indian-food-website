import React, { useState, useEffect } from "react";
import Logo from "../../assets/images/indian-palace.svg";
import { useLocation } from "react-router";

function NavBar() {
  const [open, setOpen] = useState(false);
  
  const location = useLocation();

  useEffect(() => {
    window.scroll(0, 0);
  }, [location, location.pathname]);

  const renderLinks = (change) => {
    return (
      <>
        <a
          className="navlink"
          href="/"
          onClick={() => {
            change == false && setOpen(false);
          }}
        >
          HOME
        </a>
        <a
          className="navlink"
          href="/"
          onClick={() => {
            change == false && setOpen(false);
          }}
        >
          GALLERY
        </a>
        <a
          className="navlink"
          href="/"
          onClick={() => {
            change == false && setOpen(false);
          }}
        >
          RESTAURANTS
        </a>
        <a href="/" className="a-logo">
              <img className="logo" src={Logo} alt="logo img"></img>
            </a>
        <a
          className="navlink"
          href="/"
          onClick={() => {
            change == false && setOpen(false);
          }}
        >
          HISTORY
        </a>
        <a
          className="navlink"
          href="/"
          onClick={() => {
            change == false && setOpen(false);
          }}
        >
          ABOUT US
        </a>
        <a
          className="navlink"
          href="/"
          onClick={() => {
            change == false && setOpen(false);
          }}
        >
          CONTACT
        </a>
      </>
    );
  };
  return (
    <div>
      <div
        style={{
          height: "40px",
          width: "100%",
        }}
      ></div>
      <div className="topnav">
        {open && (
          <div className="backdrop" onClick={() => setOpen(false)}></div>
        )}
        <div className="nav-links row">{renderLinks()}</div>

        <div className={open ? "mobile " : "mobile closed"}>
          <div
            className="row"
            style={{
              width: "100%",
              marginBottom: "60px",
            }}
          ></div>

          {renderLinks(false)}
        </div>
        <div
          className={open ? "hamburger open" : "hamburger"}
          onClick={() => setOpen(!open)}
        >
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default NavBar;