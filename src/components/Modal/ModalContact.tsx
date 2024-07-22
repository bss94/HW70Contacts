import {Button, Card, Col, Modal, Row} from 'react-bootstrap';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {closeModal, selectCurrentContact, selectDeleting, selectShow} from '../../store/contactSlice';
import SpinnerBtn from '../SpinnerBtn/SpinnerBtn';
import {deleteContact, fetchContacts} from '../../store/contactThunk';

const ModalContact = () => {
  const dispatch = useAppDispatch();
  const contact = useAppSelector(selectCurrentContact);
  const show = useAppSelector(selectShow);
  const deleting = useAppSelector(selectDeleting);

  const deleteThisContact = async (id: string) => {
    await dispatch(deleteContact(id));
    dispatch(fetchContacts());
  };

  return contact && (
    <Modal
      show={show}
      onHide={() => dispatch(closeModal())}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {contact.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card className="mt-3">
          <Row>
            <Col sm={6} lg={4}>
              <Card.Img className="p-2" variant="top" src={contact.photo} alt="not found"/>
            </Col>
            <Col sm={6} lg={8}>
              <Card.Body className="d-flex justify-content-center align-items-start flex-column h-100">
                <h3 className="mb-4">Name: {contact.name}</h3>
                <p className="mb-1">Phone: {contact.phone}</p>
                <p>email: {contact.email}</p>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Modal.Body>
      <Modal.Footer className="d-block">
        <Row>
          <Col/>
          <Col xs={3}>
            <Button className="btn-success w-100 mb-3">Edit</Button>
          </Col>
          <Col xs={3}>
            <SpinnerBtn className="w-100 mb-3"
                        isSending={deleting}
                        variant={'danger'}
                        onClick={() => {
                          deleteThisContact(contact.id);
                        }}
            >Delete</SpinnerBtn>
          </Col>
          <Col/>
        </Row>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalContact;