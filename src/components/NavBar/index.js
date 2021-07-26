import React from "react";
import { Navbar } from "react-bootstrap";
import icon from "../../assets/icon.png";
import "./NavBar.css";

function NavBar() {
  return (
    <div style={{}}>
      <Navbar style={{ backgroundColor: "#00c4ff", paddingLeft: "5%" }}>
        <Navbar.Brand href="/">
          <img
            alt=""
            src={icon}
            width="50"
            height="50"
            className="d-inline-block align-top"
          />
          <Navbar.Text
            style={{
              color: "white",
              paddingLeft: "30px",
              fontFamily: "Jakarta",
              fontSize: "30px",
            }}
          >
            Menu
          </Navbar.Text>
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default NavBar;
