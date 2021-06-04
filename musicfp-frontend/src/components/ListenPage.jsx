import AppContainer from './AppContainer';
import ListenButton from './ListenButton';

const ListenPage = props => {
  const { setPageState, setShowModal, setResults } = props
  return (
    <>
      <ListenButton setShowModal={setShowModal} setResults={setResults}/>
    </>
  )
}

export default ListenPage;
