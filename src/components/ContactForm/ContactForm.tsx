
import {Button, Col, Form} from 'react-bootstrap';

const ContactForm = () => {
  return (
    <div>
      <Form className="mt-5">
        <Form.Group as={'div'} className="mb-3 row">
          <Col sm={4}>
            <Form.Label>Name</Form.Label>
          </Col>
          <Col sm={8}>
            <Form.Control type="text" placeholder="Your name" />
          </Col>
        </Form.Group>

        <Form.Group as={'div'} className="mb-3 row">
          <Col sm={4}>
            <Form.Label>Phone</Form.Label>
          </Col>
          <Col sm={8}>
            <Form.Control type="text" placeholder="Phone number" />
          </Col>
        </Form.Group>

        <Form.Group as={'div'} className="mb-3 row">
          <Col sm={4}>
            <Form.Label>Email address</Form.Label>
          </Col>
          <Col sm={8}>
            <Form.Control type="email" placeholder="name@example.com" />
          </Col>
        </Form.Group>

        <Form.Group as={'div'} className="mb-3 row">
          <Col sm={4}>
            <Form.Label>Photo</Form.Label>
          </Col>
          <Col sm={8}>
            <Form.Control type="url"  required placeholder="Photo Url" />
          </Col>
        </Form.Group>

        <Button type={"submit"}>sss</Button>
      </Form>
    </div>
  );
};

export default ContactForm;