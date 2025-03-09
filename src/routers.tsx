



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
// import Patients from './features/patients/patients';
// import StaffManagement from './features/staff/staff';
// import PrescriptionManagement from './features/prescriptions/prescriptions';
// import Reports from './features/reports/reports';
// import Pharmacy from './features/phamacy/phamacy';
// import DashboardHome from './pages/dashboardhome';
// import PatientDashboard from './components/patientsdashboard';
// import MyAccount from './patientFeatures/myaccount';
// import Appointments from './patientFeatures/Appointments';
// import Payments from './patientFeatures/payments';




// const Router: React.FC = () => {
//   const router = createBrowserRouter([
//     {
//       path: '/',
//       element: <Home />,
//     },
//     {
//       path: '/register',
//       element: <RegisterPage />,
//     },
//     {
//       path: '/about',
//       element: <About />,
//     },
//     {
//       path: '/contact',
//       element: <Contact />,
//     },
//     {
//       path: '/features',
//       element: <Features />,
//     },
//     {
//       path: '/faq',
//       element: <FAQ />,
//     },
//     {
//       path: '/login',
//       element: <LoginPage />,
//     },
//     {
//       path: '/forgot-password',
//       element: <ForgotPassword />,
//     },
//     {
//       path: '/verify-otp',
//       element: <VerifyOtp />,
//     },

//     // 🟩 Patient Dashboard Routes
//     {
//       path: '/patient',
//       element: <PatientDashboard />, // Patient layout with sidebar
//       children: [
//         {
//           index: true, // Default patient dashboard view
//           element: <DashboardHome />,
//         },
//         {
//           path: 'account',
//           element: <MyAccount />,
//         },
//         {
//           path: 'appointments',
//           element: <Appointments />, // Or a patient-specific component
//         },
//         {
//           path: 'payments',
//           element: <Payments />, // Replace with MedicalHistory component
//         },
//         // {
//         //   path: 'prescriptions',
//         //   element: <PrescriptionManagement />, // Or a patient prescription view
//         // },
//         // {
//         //   path: 'reports',
//         //   element: <Reports />, // Patient-specific reports
//         // },
//       ],
//     },

//     // 🟩 Staff Dashboard Routes
//     {
//       path: '/dashboard',
//       element: <StaffDashboard />, // Staff layout with sidebar
//       children: [
//         {
//           index: true,
//           element: <DashboardHome />,
//         },
//         {
//           path: 'appointments',
//           element: <AppointmentAdmin />,
//         },
//         {
//           path: 'patients',
//           element: <Patients />,
//         },
//         {
//           path: 'staff',
//           element: <StaffManagement />,
//         },
//         {
//           path: 'prescriptions',
//           element: <PrescriptionManagement />,
//         },
//         {
//           path: 'pharmacy',
//           element: <Pharmacy />,
//         },
//         {
//           path: 'reports',
//           element: <Reports />,
//         },
//       ],
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
import PatientDashboard from './components/patientsdashboard';
import MyAccount from './patientFeatures/myaccount';
import Appointments from './patientFeatures/Appointments';
import Payments from './patientFeatures/payments';
import PaymentSuccess from './patientFeatures/success';
import PaymentFailed from './patientFeatures/fail';

const Router: React.FC = () => {
  const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/register', element: <RegisterPage /> },
    { path: '/about', element: <About /> },
    { path: '/contact', element: <Contact /> },
    { path: '/features', element: <Features /> },
    { path: '/faq', element: <FAQ /> },
    { path: '/login', element: <LoginPage /> },
    { path: '/forgot-password', element: <ForgotPassword /> },
    { path: '/verify-otp', element: <VerifyOtp /> },

    // 🟩 Patient Dashboard Routes
    {
      path: '/patient',
      element: <PatientDashboard />, // Patient layout with sidebar
      children: [
        { index: true, element: <DashboardHome /> },
        { path: 'account', element: <MyAccount /> },
        { path: 'appointments', element: <Appointments /> },
        { path: 'payments', element: <Payments /> },
        { path: 'payment-success/:patientId', element: <PaymentSuccess /> },
        { path: 'payment-failed/:patientId', element: <PaymentFailed /> },
      ],
    },

    // 🟩 Staff Dashboard Routes
    {
      path: '/dashboard',
      element: <StaffDashboard />,
      children: [
        { index: true, element: <DashboardHome /> },
        { path: 'appointments', element: <AppointmentAdmin /> },
        { path: 'patients', element: <Patients /> },
        { path: 'staff', element: <StaffManagement /> },
        { path: 'prescriptions', element: <PrescriptionManagement /> },
        { path: 'pharmacy', element: <Pharmacy /> },
        { path: 'reports', element: <Reports /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
