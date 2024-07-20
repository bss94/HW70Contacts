import {Container, Navbar} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

const Toolbar = () => {
  return (
    <Navbar bg="warning" data-bs-theme="dark">
      <Container>
        <NavLink className="navbar-brand" to="/">
         Contacts
        </NavLink>
      </Container>
    </Navbar>
  );
};

export default Toolbar;