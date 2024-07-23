import ContactItem from './ContactItem';
import {useAppDispatch, useAppSelector,} from '../../app/hooks';
import {useEffect} from 'react';
import {fetchContacts} from '../../store/contactThunk';
import {openModal, resetState, selectContacts, selectFetching} from '../../store/contactSlice';
import {Spinner} from 'react-bootstrap';
import {Contact} from '../../types';

const ContactsList = () => {
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(selectContacts);
  const fetchingContacts = useAppSelector(selectFetching);

  useEffect(() => {
    dispatch(fetchContacts());
    dispatch(resetState());
  }, [dispatch]);

  const onOpenModal = (contact: Contact) => {
    dispatch(openModal(contact));
  };
  return (
    <>
      {fetchingContacts ? <div className="d-block text-center"><Spinner variant="warning"/></div>
        :
        contacts.map(el => {
          return <ContactItem onContactClick={() => onOpenModal(el)}
                              name={el.name}
                              phone={el.phone}
                              photo={el.photo}
                              key={el.id}/>;
        })
      }
    </>
  );
};

export default ContactsList;