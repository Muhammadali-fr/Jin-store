import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import axios from "axios";

// Component
import MainLayout from './layout/MainLayout';
import SidebarLayout from './layout/SidebarLayout';

// toast 
axios.defaults.baseURL = "http://localhost:5000/";
axios.defaults.withCredentials = true;

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <SidebarLayout />
        }
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App