import React, {PropsWithChildren} from 'react';
import Toolbar from "../Toolbar/Toolbar";
import {Col, Container, Row} from 'react-bootstrap';

const Layout: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <>
      <header>
        <Toolbar/>
      </header>
      <main>
        <Container>
          <Row>
            <Col/>
            <Col sm={10}>
              {children}
            </Col>
            <Col/>
          </Row>
        </Container>
      </main>
    </>
  );
};

export default Layout;