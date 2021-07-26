import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import icon from "../../assets/icon.png";
import "./NavBar.css";

function NavBar() {
  return (
    <div style={{}}>
      <Navbar style={{ backgroundColor: "#00c4ff", alignItems: "center" }}>
        <Container>
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
              Admin
            </Navbar.Text>
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Nav className="me-auto">
              <Nav.Link
                style={{
                  color: "white",
                  paddingLeft: "30px",
                  fontFamily: "Jakarta",
                  fontSize: 20,
                }}
                href="/"
              >
                Log Out
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
