import {Container, Nav, Navbar} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

const Toolbar = () => {
  return (
    <Navbar bg="warning" data-bs-theme="dark">
      <Container>
        <NavLink className="navbar-brand" to="/">
          Contacts
        </NavLink>
        <Nav>
          <NavLink className="nav-link" to="/new-contact">
            add new contact
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Toolbar;