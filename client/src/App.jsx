import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import axios from "axios";

// Component
import MainLayout from './layout/MainLayout';
import SidebarLayout from './layout/SidebarLayout';
import Profile from './components/Profile';

// toast 
axios.defaults.baseURL = "http://localhost:5000/";
axios.defaults.withCredentials = true;

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />
    }
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App