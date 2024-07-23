import ContactForm from '../../components/ContactForm/ContactForm';
import {useNavigate, useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {selectEditContact, selectFetchOne, selectUpdating} from '../../store/contactSlice';
import {Spinner} from 'react-bootstrap';
import {useEffect} from 'react';
import {fetchOneContact, updateContact} from '../../store/contactThunk';
import {ApiContact} from '../../types';
import {toast} from 'react-toastify';

const EditContact = () => {
  const {id} = useParams() as { id: string };
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const fetchingOne = useAppSelector(selectFetchOne);
  const updating = useAppSelector(selectUpdating);
  const oneContact = useAppSelector(selectEditContact);

  useEffect(() => {
    dispatch(fetchOneContact(id));
  }, [dispatch, id]);

  const onSubmit = async (apiContact: ApiContact) => {
    try {
      await dispatch(updateContact({id, apiContact})).unwrap();
      navigate('/');
      toast.success('Contact updated!');
    } catch (e) {
      toast.error('Cant update contact! Something wrong');
    }
  };
  return (
    <>
      {fetchingOne && <div className="d-block text-center"><Spinner variant="warning"/></div>}
      {oneContact &&
        <ContactForm
          onSubmit={onSubmit}
          sending={updating}
          existingContact={oneContact}
        />}

    </>
  );
};

export default EditContact;