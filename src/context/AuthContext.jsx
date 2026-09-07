import React, { createContext, useContext, useState, useEffect } from 'react';
import { apiFetch, getApiUrl } from '../utils/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('user');
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      return null;
    }
  });
  const [accessToken, setAccessToken] = useState(() => localStorage.getItem('accessToken') || null);
  const [isLoading, setIsLoading] = useState(true);

  // Helper fetch wrapper with Bearer token
  const fetchWithAuth = async (endpoint, options = {}) => {
    const activeToken = accessToken || localStorage.getItem('accessToken');
    return apiFetch(endpoint, options, activeToken);
  };

  // Rehydrate session on mount via refresh token cookie
  useEffect(() => {
    const initAuth = async () => {
      try {
        const refreshUrl = getApiUrl('/auth/refresh');
        const refreshRes = await fetch(refreshUrl, { method: 'POST', credentials: 'include' });
        const refreshData = await refreshRes.json();

        if (refreshData.success && refreshData.data?.accessToken) {
          const newToken = refreshData.data.accessToken;
          const newUser = refreshData.data.user;
          setAccessToken(newToken);
          setUser(newUser);
          localStorage.setItem('accessToken', newToken);
          localStorage.setItem('user', JSON.stringify(newUser));
        }
      } catch (err) {
        console.warn('Session rehydration failed:', err);
      } finally {
        setIsLoading(false);
      }
    };

    initAuth();
  }, []);

  const login = async (email, password) => {
    const data = await apiFetch('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });

    if (!data.success) {
      throw new Error(data.message || 'Login failed');
    }

    const token = data.data.accessToken;
    const userData = data.data.user;

    setAccessToken(token);
    setUser(userData);
    localStorage.setItem('accessToken', token);
    localStorage.setItem('user', JSON.stringify(userData));
    return userData;
  };

  const logout = async () => {
    try {
      await fetch(getApiUrl('/auth/logout'), { method: 'POST', credentials: 'include' });
    } catch (e) {
      console.warn('Logout request failed:', e);
    }
    setAccessToken(null);
    setUser(null);
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
  };

  const register = async (userData) => {
    const data = await apiFetch('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
    if (!data.success) {
      throw new Error(data.message || 'Registration failed');
    }
    return data;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        accessToken,
        isLoading,
        login,
        logout,
        register,
        fetchWithAuth,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
