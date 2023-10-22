import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import "./NavBar.scss";

function NavBar() {
  return (
    <Nav className="me-auto bg-primary my-3 rounded-3">
      <Nav.Link as={NavLink} to="/" className="me-auto link-light">
        Blog app
      </Nav.Link>
      <Nav.Link as={NavLink} to="/" className="link-light">
        Home
      </Nav.Link>
      <Nav.Link as={NavLink} to="/categories" className="link-light">
        Categories
      </Nav.Link>
      <Nav.Link as={NavLink} to="/about" className="link-light">
        About
      </Nav.Link>
    </Nav>
  );
}

export default NavBar;
