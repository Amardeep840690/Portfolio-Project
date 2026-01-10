import { createContext, useContext, useState, useEffect } from 'react';
import { authService } from '@/services/auth';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check for existing session on mount
  useEffect(() => {
    const initAuth = async () => {
      try {
        // Mocking a session check failure for now since we have no backend
        // In production: const user = await authService.checkSession();
        const sessionUser = null; 
        setUser(sessionUser);
      } catch (error) {
        console.error('Session check failed', error);
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, []);

  const login = async (username, password) => {
    // In production: const user = await authService.login(username, password);
    // Mock login for demonstration
    const mockUser = { id: 1, name: 'Satya', role: 'admin' };
    setUser(mockUser);
    return mockUser;
  };

  const logout = async () => {
    // In production: await authService.logout();
    setUser(null);
  };

  const value = {
    user,
    loading,
    login,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
