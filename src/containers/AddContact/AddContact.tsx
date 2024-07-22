
import ContactForm from '../../components/ContactForm/ContactForm';
import {useAppSelector} from '../../app/hooks';
import {selectCreating} from '../../store/contactSlice';

const AddContact = () => {
  const creating=useAppSelector(selectCreating);
  return (
    <div>
      <ContactForm creating={creating}/>
    </div>
  );
};

export default AddContact;