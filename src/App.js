import logo from './logo.svg';
import './App.css';
import Registar from './Registar/Registar';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Layout/Main';
import Login from './Registar/Login';

function App() {
 
const router=createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/registar',
        element:<Registar></Registar>
      }
    ]
  }
])
  return (
    <div className="App">
  
    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
