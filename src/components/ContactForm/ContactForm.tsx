import {Button, Card, Col, Form} from 'react-bootstrap';
import React, {FormEvent, useState} from 'react';
import {ApiContact, ContactMutation} from '../../types';
import SpinnerBtn from '../SpinnerBtn/SpinnerBtn';
import {useNavigate} from 'react-router-dom';

interface Props {
  existingContact?: ContactMutation;
  onSubmit: (contact: ApiContact) => void;
  sending: boolean;
}

const initial: ContactMutation = {
  name: '',
  email: '',
  photo: '',
  phone: '',
};

const ContactForm: React.FC<Props> = ({existingContact, onSubmit, sending}) => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState<ContactMutation>(
    existingContact ?
      existingContact :
      initial
  );

  const changeContact = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState(prevState => (
        {
          ...prevState,
          [event.target.name]: event.target.value
        }
      )
    );
  };
  const onFormSubmit = async (event: FormEvent) => {
    event.preventDefault();
    onSubmit(formState);
  };
  return (
    <div>
      <Form className="mt-5" onSubmit={onFormSubmit}>
        <Form.Group as={'div'} className="mb-3 row" controlId="name">
          <Col sm={4}>
            <Form.Label>Name</Form.Label>
          </Col>
          <Col sm={8}>
            <Form.Control
              type="text"
              placeholder="Your name"
              name="name"
              value={formState.name}
              onChange={changeContact}
            />
          </Col>
        </Form.Group>

        <Form.Group as={'div'} className="mb-3 row" controlId="phone">
          <Col sm={4}>
            <Form.Label>Phone</Form.Label>
          </Col>
          <Col sm={8}>
            <Form.Control
              type="text"
              placeholder="Phone number"
              name="phone"
              value={formState.phone}
              onChange={changeContact}
            />
          </Col>
        </Form.Group>
        <Form.Group as={'div'} className="mb-3 row" controlId="email">
          <Col sm={4}>
            <Form.Label>Email address</Form.Label>
          </Col>
          <Col sm={8}>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              name="email"
              value={formState.email}
              onChange={changeContact}
            />
          </Col>
        </Form.Group>

        <Form.Group as={'div'} className="mb-3 row" controlId="photo">
          <Col sm={4}>
            <Form.Label>Photo</Form.Label>
          </Col>
          <Col sm={8}>
            <Form.Control type="url"
                          required
                          placeholder="Photo Url"
                          name="photo"
                          value={formState.photo}
                          onChange={changeContact}
            />
          </Col>
        </Form.Group>
        <Form.Group as={'div'} className="mb-3 row">
          <Col sm={6}>
            <h5>Preview:</h5>
            <Card className="mt-3">
              <Card.Img variant="top" src={formState.photo} alt="not found"/>
            </Card>
          </Col>
          <Col sm={8}/>

        </Form.Group>

        <SpinnerBtn type="submit"
                    variant="warning"
                    isSending={sending}
                    className="text-white mx-3"
        >{!existingContact ? 'Create' : 'Edit'}</SpinnerBtn>
        <Button className="btn-secondary mx-3" onClick={() => {
          navigate('/');
        }}>Back to Contacts</Button>
      </Form>
    </div>
  );
};

export default ContactForm;