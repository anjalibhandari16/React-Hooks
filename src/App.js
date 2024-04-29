import logo from './logo.svg';
import './App.css';
import ClickComponent from './Components/1-ClickComponent';
import ClickFunctionalComponent from './Components/2-ClickFunctionalComponent';
import HookCounter from './Components/3-HookCounter';
import ClickWith_useStateObject from './Components/4-ClickWith_useStateObject';
import ClickWith_useStateArray from './Components/5-ClickWith_useStateArray';
import AddItem from './Components/6-AddItem';

function App() {
  return (
    <div className="App">
      {/* <ClickComponent /> */}
      {/* <ClickFunctionalComponent /> */}
      {/* <HookCounter /> */}
      {/* <ClickWith_useStateObject /> */}
      {/* <ClickWith_useStateArray /> */}
      <AddItem />
    </div>
  );
}

export default App;
