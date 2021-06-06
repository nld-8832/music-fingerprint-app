import AppContainer from './AppContainer';

const MenuPage = props => {
  const { setPageState } = props
  return (
    <>
      <div className="mode mode-menu" onClick={() => setPageState("record")}>
        <span style={{color: "black"}}>Music recognition</span>
      </div>
      <div className="mode mode-menu" onClick={() => setPageState("vc")}>
        <span style={{color: "black"}}>Voice conversion</span>
      </div>
    </>
  )
}
export default MenuPage;
