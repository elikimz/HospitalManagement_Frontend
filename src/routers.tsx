// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// // Import your components

// import Home from './pages/HomePage';
// import RegisterPage from './features/auth/register/register';
// import About from './pages/about';
// import Contact from './pages/contact';
// import Features from './pages/features';
// import FAQ from './pages/fqa';
// import LoginPage from './features/auth/login/login';
// import { ForgotPassword } from './features/auth/login/forgotpassword';
// import VerifyOtp from './features/auth/login/verifypassword';
// import StaffDashboard from './components/dashboard';
// import AppointmentAdmin from './features/appointments/appointment';


// const Router: React.FC = () => {
//   const router = createBrowserRouter([
   
//     {
//       path: '/', // This is the path for the Reset Password page
//       element: <Home/>,
//       // errorElement: <Error /> 
//     },
//     {
//       path: '/register', // This is the path for the Reset Password page
//       element: <RegisterPage/>,
//       // errorElement: <Error /> 
//     },
//     {
//       path: '/about', // This is the path for the Reset Password page
//       element: <About/>,
//       // errorElement: <Error /> 
//     },
//     {
//       path: '/contact', // This is the path for the Reset Password page
//       element: <Contact/>,
//       // errorElement: <Error /> 
//     },
//     {
//       path: '/features', // This is the path for the Reset Password page
//       element: <Features/>,
//       // errorElement: <Error /> 
//     },
//     {
//       path: '/faq', // This is the path for the Reset Password page
//       element: <FAQ/>,
//       // errorElement: <Error /> 
//     },
//     {
//       path: '/login', // This is the path for the Reset Password page
//       element: <LoginPage/>,
//       // errorElement: <Error /> 
//     },
 
//     {
//       path: '/dashboard', // This is the path for the Reset Password page
//       element: <StaffDashboard/>,
//       // errorElement: <Error /> 
//     },
//     {
//       path: '/forgot-password', // This is the path for the Reset Password page
//       element: <ForgotPassword/>,
//       // errorElement: <Error /> 
//     },
//     {
//       path: '/verify-otp', // This is the path for the Reset Password page
//       element: <VerifyOtp/>,
//       // errorElement: <Error /> 
//     },
//     {
//       path: '/appointments', // This is the path for the Reset Password page
//       element: <AppointmentAdmin/>,
//       // errorElement: <Error /> 
//     },
//   ]);

//   return <RouterProvider router={router} />;
// };

// export default Router;



import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// Import your components
import Home from './pages/HomePage';
import RegisterPage from './features/auth/register/register';
import About from './pages/about';
import Contact from './pages/contact';
import Features from './pages/features';
import FAQ from './pages/fqa';
import LoginPage from './features/auth/login/login';
import { ForgotPassword } from './features/auth/login/forgotpassword';
import VerifyOtp from './features/auth/login/verifypassword';
import StaffDashboard from './components/dashboard';
import AppointmentAdmin from './features/appointments/appointment';
import Patients from './features/patients/patients';
import StaffManagement from './features/staff/staff';
import PrescriptionManagement from './features/prescriptions/prescriptions';
import Reports from './features/reports/reports';
import Pharmacy from './features/phamacy/phamacy';
import DashboardHome from './pages/dashboardhome';

const Router: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/register',
      element: <RegisterPage />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/contact',
      element: <Contact />,
    },
    {
      path: '/features',
      element: <Features />,
    },
    {
      path: '/faq',
      element: <FAQ />,
    },
    {
      path: '/login',
      element: <LoginPage />,
    },
    {
      path: '/forgot-password',
      element: <ForgotPassword />,
    },
    {
      path: '/verify-otp',
      element: <VerifyOtp />,
    },

    // 🟩 Wrap dashboard routes to render inside the layout
    {
      path: '/dashboard',
      element: <StaffDashboard />, // Your dashboard layout with the sidebar
      children: [
        {
          index: true, // Default dashboard view
          element: <DashboardHome />,
        },
        {
          path: 'appointments',
          element: <AppointmentAdmin />,
        },
        {
          path: 'patients',
          element: <Patients />,
        },
        {
          path: 'staff',
          element: <StaffManagement />,
        },
        {
          path: 'prescriptions',
          element: <PrescriptionManagement/>,
        },
        {
          path: 'pharmacy',
          element: <Pharmacy />,
        },
        {
          path: 'reports',
          element: <Reports />,
        },
       
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
