import AppContainer from './AppContainer';
import ListenButtonVC from './ListenButton_VC';

const VCPage = props => {
  const { setPageState, setShowModal, setResults } = props
  return (
    <>
      <ListenButtonVC setShowModal={setShowModal} setResults={setResults}/>
      <div className="mode" onClick={() => setPageState("menu")}>
        <span style={{color: "black"}}>Go back</span>
      </div>
    </>
  )
}

export default VCPage;
