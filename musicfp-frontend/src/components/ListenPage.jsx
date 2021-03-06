import AppContainer from './AppContainer';
import ListenButton from './ListenButton';

const ListenPage = props => {
  const { setPageState, setShowModal, setResults } = props
  return (
    <>
      <ListenButton setShowModal={setShowModal} setResults={setResults}/>
      <div className="mode" onClick={() => setPageState("menu")}>
        <span style={{color: "black"}}>Go back</span>
      </div>
    </>
  )
}

export default ListenPage;
