import { Navigate } from 'react-router-dom';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import Home from '@/pages/Home/Home';
import NotFound from '@/pages/NotFound/NotFound';
import Login from '@/pages/Login/Login';
import LoginLayout from '@/components/layouts/LoginLayout';

const routers = (isLoggedIn) => [
  // Protected routers
  {
    path: '/',
    element: isLoggedIn ? <DefaultLayout /> : <Navigate to="/login" />,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  },

  // Public routers
  {
    path: '/login',
    element: !isLoggedIn ? <LoginLayout /> : <Navigate to="/" />,
    children: [
      {
        path: '/login',
        element: <Login />
      }
    ]
  },

  // Error routers
  {
    path: '*',
    element: <Navigate to="/404" replace />
  },
  {
    path: '/404',
    element: <NotFound />
  }
];

export default routers;
