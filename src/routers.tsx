import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// Import your components

import Home from './pages/HomePage';
import RegisterPage from './features/auth/register/register';
import About from './pages/about';
import Contact from './pages/contact';
import Features from './pages/features';
import FAQ from './pages/fqa';
import LoginPage from './features/auth/login/login';
import ForgotPassword from './pages/forgetpassword';
import Dashboard from './components/dashboard';


const Router: React.FC = () => {
  const router = createBrowserRouter([
   
    {
      path: '/', // This is the path for the Reset Password page
      element: <Home/>,
      // errorElement: <Error /> 
    },
    {
      path: '/register', // This is the path for the Reset Password page
      element: <RegisterPage/>,
      // errorElement: <Error /> 
    },
    {
      path: '/about', // This is the path for the Reset Password page
      element: <About/>,
      // errorElement: <Error /> 
    },
    {
      path: '/contact', // This is the path for the Reset Password page
      element: <Contact/>,
      // errorElement: <Error /> 
    },
    {
      path: '/features', // This is the path for the Reset Password page
      element: <Features/>,
      // errorElement: <Error /> 
    },
    {
      path: '/faq', // This is the path for the Reset Password page
      element: <FAQ/>,
      // errorElement: <Error /> 
    },
    {
      path: '/login', // This is the path for the Reset Password page
      element: <LoginPage/>,
      // errorElement: <Error /> 
    },
    {
      path: '/forgot-password', // This is the path for the Reset Password page
      element: <ForgotPassword/>,
      // errorElement: <Error /> 
    },
    {
      path: '/dashboard', // This is the path for the Reset Password page
      element: <Dashboard/>,
      // errorElement: <Error /> 
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
