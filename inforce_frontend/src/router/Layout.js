import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import paths from "./paths";
import classes from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Container>
          <Nav className="mr-auto">
            <Nav.Link className={classes.NavLinks} as={Link} to={paths.home}>
              <p className={classes.NavLinks}> Library</p>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container>{children}</Container>
    </div>
  );
};
export default Layout;
