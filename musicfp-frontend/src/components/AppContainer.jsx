import './AppContainer.css';

const AppContainer = props => {
  const { children } = props;
  return (
    <div className="App">
      <header className="App-header">
        { children }
      </header>
    </div>
  )
};

export default AppContainer;
