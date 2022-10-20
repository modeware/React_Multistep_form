import Register from "./components/pages/Register/register";
import InputContainer from './components/molecules/InputContainer/InputContainer';
import { InputWithLabel, InputWithLabelLeft } from './components/atoms/input/index';
import SimpleCard from './components/molecules/SimpleCard/simpleCard';
import ComponentRenderer from './components/molecules/ComponentRenderer/componentRenderer';
import logo from './assets/logo.png'
 

function App() {
  return (
    <div className={'center mt-3'}>
      <div className={'center'} style={{gridAutoFlow: "column", marginBottom: '2rem'}}>
        <img className='icon-margin' src={logo} alt="logo"/>
        <h1>Eden</h1>
      </div>
      <Register />
    </div>
  );
}

export default App;
