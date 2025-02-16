import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RegisterPage from './features/auth/register/register';




  const Router: React.FC = () => {
    const router = createBrowserRouter([
      {
        path: '/',
        element: <RegisterPage/>,
        // errorElement: <Error />,
      },
      
    ]);
    return (
      <RouterProvider router={router} />
    );
}

export default Router
