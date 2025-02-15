import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Component
import MainLayout from './layout/MainLayout';
import Signup from './components/Signup';
import Login from "./components/Login";
import axios from "axios";


axios.defaults.baseURL = "http://localhost:5000/";
axios.defaults.withCredentials = true;
const App = () => {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />
    },
    {
      path: '/sign-up',
      element: <Signup />
    },
    {
      path: '/login',
      element: <Login />
    }
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App