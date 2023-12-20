import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export default function MainNav() {
  return (
    <>
      <Navbar className="navbar-color">
        <Container className="logo-center">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="./images/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top navbar-logo-img"
            />
            Travel Journal
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
