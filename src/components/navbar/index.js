import React, { useState } from "react";
import { Link } from "react-router-dom";
import IndianPalace from "../../assets/images/indian-palace.svg";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div
        style={{
          height: "60px",
          width: "100%",
        }}
      ></div>
      <div className="topnav">
        {open && (
          <div className="backdrop" onClick={() => setOpen(false)}></div>
        )}
        <div className="nav-links row">
          <Link className="navlink" to="/">
            HOME
          </Link>
          <Link className="navlink" to="/">
            GALLERY
          </Link>
          <Link className="navlink" to="/">
            RESTAURANTS
          </Link>
          <div className="row">
          <Link to="/">
            <img className="logo" src={IndianPalace} alt="logo img"></img>
          </Link>
        </div>
          <Link className="navlink" to="/">
            HISTORY
          </Link>
          <Link className="navlink" to="/">
            ABOUT US
          </Link>
          <Link className="navlink" to="/">
            CONTACT
          </Link>
        </div>
        <div className={open ? "mobile " : "mobile closed"}>
          <div
            className="row"
            style={{
              width: "100%",
              marginBottom: "60px",
            }}
          >
            <div
              className={open ? "hamburger open" : "hamburger"}
              onClick={() => setOpen(!open)}
              style={{
                marginLeft: "auto",
                marginTop: "10px",
                marginRight: "20px",
              }}
            >
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </div>
          <Link className="navlink" to="/" onClick={() => setOpen(false)}>
            HOME
          </Link>
          <Link
            className="navlink"
            to="/"
            onClick={() => setOpen(false)}
          >
            GALLERY
          </Link>
          <Link className="navlink" to="/" onClick={() => setOpen(false)}>
            RESTAURANTS
          </Link>
          <Link className="navlink" to="/" onClick={() => setOpen(false)}>
            HISTORY
          </Link>
          <Link
            className="navlink"
            to="/"
            onClick={() => setOpen(false)}
          >
            ABOUT US
          </Link>
          <Link
            className="navlink"
            to="/"
            onClick={() => setOpen(false)}
          >
            CONTACT
          </Link>
        </div>
        <div
          className={open ? "hamburger open" : "hamburger"}
          onClick={() => setOpen(!open)}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
