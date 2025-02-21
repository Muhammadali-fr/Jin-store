import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import axios from "axios";

// Component
import MainLayout from './layout/MainLayout';
import SidebarLayout from './layout/SidebarLayout';
import Profile from './components/Profile';

// toast 
axios.defaults.baseURL = "http://localhost:5000/";
axios.defaults.withCredentials = true;

// context 
import { UserProvider } from './userContext';
import Cards from './components/Cards';

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Cards />
        }
      ]
    }
  ])

  return (
    <div>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </div>
  )
}

export default App