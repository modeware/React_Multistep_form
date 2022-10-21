import Register from "./components/pages/Register/register";
import InputContainer from './components/molecules/InputContainer/InputContainer';
import { InputWithLabel, InputWithLabelLeft } from './components/atoms/input/index';
import SimpleCard from './components/molecules/SimpleCard/simpleCard';
import ComponentRenderer from './components/molecules/ComponentRenderer/componentRenderer';

import logo from './assets/logo.png'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Register />,
    errorElement: <div>Please add an error page, lol</div>
  },
  {
    path: "/register/:id",
    element: <Register />,
    errorElement: <div>Please add an error page, lol</div>
  },
]);
 

function App() {
  return (
    <div className={'center mt-3'}>
      <div className={'center'} style={{gridAutoFlow: "column", marginBottom: '2rem'}}>
        <img className='icon-margin' src={logo} alt="logo"/>
        <h1>Eden</h1>
      </div>
      <RouterProvider router={router} />

    </div>
  );
}

export default App;
