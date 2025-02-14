import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Signup from './components/Signup';

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />
    },
    {
      path: '/sign-up',
      element: <Signup />
    }
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App