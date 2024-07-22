import {Card, Col, Form} from 'react-bootstrap';
import React, {FormEvent, useState} from 'react';
import {useAppDispatch} from '../../app/hooks';
import {ContactMutation} from '../../types';
import {createContact} from '../../store/contactThunk';
import SpinnerBtn from '../SpinnerBtn/SpinnerBtn';

interface Props {
  existingContact?: ContactMutation;
  id?: string;
  creating: boolean;
}

const initial: ContactMutation = {
  name: '',
  email: '',
  photo: '',
  phone: '',
};

const ContactForm: React.FC<Props> = ({existingContact, id, creating}) => {
  const dispatch = useAppDispatch();
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
  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!id) {
      dispatch(createContact(formState));
    }
  };
  return (
    <div>
      <Form className="mt-5" onSubmit={onSubmit}>
        <Form.Group as={'div'} className="mb-3 row">
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

        <Form.Group as={'div'} className="mb-3 row">
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
        <Form.Group as={'div'} className="mb-3 row">
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

        <Form.Group as={'div'} className="mb-3 row">
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

        <SpinnerBtn type={'submit'} isSending={creating}>{!id ? 'Create' : 'Edit'}</SpinnerBtn>
      </Form>
    </div>
  );
};

export default ContactForm;