import { createBrowserRouter } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import LogoffPage from '@/pages/LogoffPage';
import WelcomePage from '@/pages/WelcomePage';
import DesktopPage from '@/pages/DesktopPage';
import ContactPage from '@/pages/ContactPage';
import ProjectsPage from '@/pages/ProjectsPage';
import ProtectedRoute from '@/features/auth/ProtectedRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/welcome',
    element: <WelcomePage />,
  },
  {
    path: '/logoff',
    element: <LogoffPage />,
  },
  {
    path: '/desktop',
    element: (
      <ProtectedRoute>
        <DesktopPage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/contact',
    element: (
      <ProtectedRoute>
        <ContactPage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/projects',
    element: (
      <ProtectedRoute>
        <ProjectsPage />
      </ProtectedRoute>
    ),
  },
]);
