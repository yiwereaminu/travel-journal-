import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export default function MainNav() {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="./images/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            Travel Journal
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
