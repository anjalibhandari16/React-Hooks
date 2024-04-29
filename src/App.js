import logo from './logo.svg';
import './App.css';
import ClickComponent from './Components/1-ClickComponent';
import ClickFunctionalComponent from './Components/2-ClickFunctionalComponent';
import HookCounter from './Components/3-HookCounter';

function App() {
  return (
    <div className="App">
      {/* <ClickComponent />
      <ClickFunctionalComponent /> */}
      <HookCounter />
    </div>
  );
}

export default App;
