import {Card, Col, Row} from 'react-bootstrap';
import React from 'react';

interface Props {
  name: string;
  photo: string;
  phone: string;
}

const ContactItem: React.FC<Props> = ({
  name, photo
}) => {
  return (
    <Row>
      <Col/>
      <Col xs={12} sm={12} md={12} lg={6}>
        <Card className="mt-3">
          <Row>
            <Col sm={4}>
              <Card.Img variant="top" src={photo}/>
            </Col>
            <Col sm={8}>
              <Card.Body className="d-flex justify-content-center align-items-center h-100">
                <Card.Text>
                  {name}
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Col>
      <Col/>
    </Row>

  );
};

export default ContactItem;