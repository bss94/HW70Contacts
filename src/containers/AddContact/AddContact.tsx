import ContactForm from '../../components/ContactForm/ContactForm';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {selectCreating} from '../../store/contactSlice';
import {ApiContact} from '../../types';
import {createContact} from '../../store/contactThunk';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';

const AddContact = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const creating = useAppSelector(selectCreating);

  const onSubmit = async (apiContact: ApiContact) => {
    try {
      await dispatch(createContact(apiContact));
      navigate('/');
      toast.success('Contact created!');
    } catch (e) {
      toast.error('Cant create contact! Something wrong');
    }
  };
  return (
    <div>
      <ContactForm sending={creating} onSubmit={onSubmit}/>
    </div>
  );
};


export default AddContact;