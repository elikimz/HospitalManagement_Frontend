import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// Import your components

//import LandingPage from './pages/HomePage';
import Home from './pages/HomePage';

const Router: React.FC = () => {
  const router = createBrowserRouter([
   
    {
      path: '/', // This is the path for the Reset Password page
      element: <Home/>,
      // errorElement: <Error /> 
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
