import {Card, Col, Row} from 'react-bootstrap';
import React from 'react';

interface Props {
  name: string;
  photo: string;
  phone: string;
  onContactClick: VoidFunction;
}

const ContactItem: React.FC<Props> = ({
  name, photo, onContactClick
}) => {
  return (
    <Row>
      <Col/>
      <Col xs={12} sm={12} md={12} lg={6}>
        <Card className="mt-3" onClick={onContactClick}>
          <Row>
            <Col xs={4} sm={4}>
              <Card.Img variant="top" src={photo} alt="not found"/>
            </Col>
            <Col xs={8} sm={8}>
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