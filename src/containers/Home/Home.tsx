import ContactsList from '../../components/ContactsList/ContactsList';
import ModalContact from '../../components/Modal/ModalContact';

const Home = () => {
  return (
    <div>
      <ContactsList/>
      <ModalContact/>
    </div>
  );
};

export default Home;