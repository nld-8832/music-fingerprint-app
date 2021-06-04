import AppContainer from './AppContainer';

const MenuPage = props => {
  const { setPageState } = props
  return (
    <>
      <div className="mode" onClick={() => setPageState("upload")}>
        <span style={{color: "black"}}>Upload file</span>
      </div>
      <div className="mode" onClick={() => setPageState("record")}>
        <span style={{color: "black"}}>Record</span>
      </div>
    </>
  )
}
export default MenuPage;
