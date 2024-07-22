import ContactItem from './ContactItem';
import {useAppDispatch, useAppSelector,} from '../../app/hooks';
import {useEffect} from 'react';
import {fetchContacts} from '../../store/contactThunk';
import {openModal, selectContacts, selectFetching} from '../../store/contactSlice';
import {Spinner} from 'react-bootstrap';
import {Contact} from '../../types';

const ContactsList = () => {
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(selectContacts);
  const fetchingContacts = useAppSelector(selectFetching);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onOpenModal = (contact: Contact) => {
    dispatch(openModal(contact));
  };

  return (
    <>
      {fetchingContacts ? <Spinner/>
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