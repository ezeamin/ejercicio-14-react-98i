import { createBrowserRouter } from 'react-router-dom';

import RootView from '../views/routing/RootView';
import AuthViews from '../views/routing/AuthViews';
import PrivateView from '../views/routing/PrivateView';
import LoginView from '../views/LoginView';
import HomeView from '../views/HomeView';
import RegisterView from '../views/RegisterView';

// 2 Tipos de rutas: Públicas y Privadas
export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootView />,
    children: [
      // RUTAS PÚBLICAS
      {
        path: '',
        element: <HomeView />,
      },
      {
        path: 'detail/:id',
        element: <p>Detalle</p>,
      },
      // RUTAS DE AUTENTICACION
      // no deberían poder accederse estando logueados
      {
        path: '',
        element: <AuthViews />,
        children: [
          {
            path: 'login',
            element: <LoginView />,
          },
          {
            path: 'register',
            element: <RegisterView />,
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
