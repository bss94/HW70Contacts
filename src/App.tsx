import Layout from './components/Layout/Layout';
import {Route, Routes} from 'react-router-dom';
import Home from './containers/Home/Home';
import EditContact from './containers/EditContact/EditContact';
import AddContact from './containers/AddContact/AddContact';

const App = () => (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contacts/:id/edit" element={<EditContact/>}/>
          <Route path="/new-contact" element={<AddContact/>}/>
          <Route path="*" element={<h1>Not found!</h1>}/>
        </Routes>
      </Layout>
    </>
);

export default App
