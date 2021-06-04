import AppContainer from './components/AppContainer';
import MenuPage from './components/MenuPage';
import ListenPage from './components/ListenPage';
import Modal from './components/Modal';
import { useState } from 'react';

const MENU_STATE = "menu"
const RECORD_STATE = "record"
const UPLOAD_STATE = "upload"

const App = () => {
  const [ pageState, setPageState ] = useState(MENU_STATE);
  const [ showModal, setShowModal ] = useState(false);
  const [ results, setResults ] = useState([]);
  const renderComp = () => {
    if(pageState === MENU_STATE) {
      return <MenuPage setPageState={setPageState}/>
    }
    if(pageState === RECORD_STATE) {
      return <ListenPage setPageState={setPageState}/>
    }
    // if(pageState == MENU_STATE) {
    //   return <MenuPage/>
    // }

  }
  const hideModal = () => {
    setShowModal(false);
  }

  return (
    <AppContainer>
      <ListenPage setPageState={setPageState} setShowModal={setShowModal} setResults={setResults}/>
      <Modal show={showModal} handleClose={hideModal} results={results}>
          <p>Modal</p>
      </Modal>
    </AppContainer>
  );
}

export default App;
