import Link from "next/link";
import Router from "next/router";
import { APP_NAME } from "../config";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const Footer = () => {
  return (
    <React.Fragment>
      <Navbar color="light" light expand="md">
        <React.Fragment>
          <NavLink
            // className="font-weight-bold"
            style={{
              color: "#74153B",
              //   fontSize: "large",
            }}
          >
            Created by:
          </NavLink>

          <NavLink className="mr-auto" navbar>
            <a
              href="https://quirosfelipe.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark on-hover"
              style={{ textDecoration: "none" }}
            >
              Felipe Quiros
            </a>
            <a
              href="https://github.com/quirosfelipe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark on-hover"
              style={{ textDecoration: "none" }}
            >
              <img
                style={{
                  width: "30px",
                  height: "30px",
                  marginLeft: "10px",
                }}
                src="https://img.icons8.com/ios-glyphs/30/000000/github.png"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/quirosfelipe/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark on-hover"
              style={{ textDecoration: "none" }}
            >
              <img
                style={{
                  width: "25px",
                  height: "25px",
                  marginLeft: "10px",
                }}
                src="https://img.icons8.com/metro/26/000000/linkedin.png"
              />
            </a>
          </NavLink>
        </React.Fragment>
        <React.Fragment>
          <NavLink
            // className="font-weight-bold"
            style={{
              color: "#74153B",
              //   fontSize: "large",
            }}
          >
            Copyright© Brana Yoga. All rights Reserved. 2020.
          </NavLink>
        </React.Fragment>
        <Nav className="ml-auto" navbar>
          <React.Fragment>
            <NavItem>
              <a
                href="https://github.com/quirosfelipe/branayogaflow"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary text-light"
              >
                Check under the hood
              </a>
            </NavItem>
          </React.Fragment>
        </Nav>
      </Navbar>
    </React.Fragment>
  );
};

export default Footer;
