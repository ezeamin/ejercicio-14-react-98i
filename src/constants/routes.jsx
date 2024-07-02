import { createBrowserRouter } from 'react-router-dom';

import RootView from '../views/routing/RootView';
import PublicView from '../views/routing/PublicView';
import PrivateView from '../views/routing/PrivateView';
import LoginView from '../views/LoginView';
import HomeView from '../views/HomeView';

// 2 Tipos de rutas: Públicas y Privadas
export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootView />,
    children: [
      // RUTAS PÚBLICAS
      {
        path: '',
        element: <PublicView />,
        children: [
          {
            path: '',
            element: <HomeView />,
          },
          {
            path: 'detail/:id',
            element: <p>Detalle</p>,
          },
          {
            path: 'login',
            element: <LoginView />,
          },
          {
            path: 'register',
            element: <p>Register</p>,
          },
        ],
      },
      // RUTAS PRIVADAS
      {
        path: '',
        element: <PrivateView />,
        children: [
          {
            path: 'admin',
            element: <p>Admin</p>,
          },
        ],
      },
    ],
  },
]);
