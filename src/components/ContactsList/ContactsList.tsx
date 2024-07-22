import ContactItem from './ContactItem';
import {useAppDispatch, useAppSelector,} from '../../app/hooks';
import {useEffect} from 'react';
import {fetchContacts} from '../../store/contactThunk';
import {selectContacts, selectFetching} from '../../store/contactSlice';
import {Spinner} from 'react-bootstrap';

const ContactsList = () => {
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(selectContacts);
  const fetchingContacts = useAppSelector(selectFetching);


  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {fetchingContacts ? <Spinner/>
        :
        contacts.map(el => {
          return <ContactItem name={el.name} phone={el.phone} photo={el.photo} key={el.id}/>;
        })
      }


    </>
  );
};

export default ContactsList;