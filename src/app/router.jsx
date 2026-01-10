import { createBrowserRouter } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import LogoffPage from '@/pages/LogoffPage';
import WelcomePage from '@/pages/WelcomePage';
import Desktop from '@/features/desktop';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/logoff',
    element: <LogoffPage />,
  },
  {
    path: '/welcome',
    element: <WelcomePage />,
  },
  {
    path: '/desktop',
    element: <Desktop />,
  },
]);
