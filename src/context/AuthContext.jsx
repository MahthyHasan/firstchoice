import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Helper fetch wrapper with Bearer token
  const fetchWithAuth = async (url, options = {}) => {
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    };
    if (accessToken) {
      headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return fetch(url, { ...options, headers });
  };

  // Rehydrate session on mount via refresh token cookie & /api/auth/me
  useEffect(() => {
    const initAuth = async () => {
      try {
        const refreshRes = await fetch('/api/auth/refresh', { method: 'POST' });
        const refreshData = await refreshRes.json();

        if (refreshData.success && refreshData.data?.accessToken) {
          setAccessToken(refreshData.data.accessToken);
          setUser(refreshData.data.user);
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
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (!res.ok || !data.success) {
      throw new Error(data.message || 'Login failed');
    }

    setAccessToken(data.data.accessToken);
    setUser(data.data.user);
    return data.data.user;
  };

  const logout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
    } catch (e) {
      console.warn('Logout request failed:', e);
    }
    setAccessToken(null);
    setUser(null);
  };

  const register = async (userData) => {
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });
    const data = await res.json();
    if (!res.ok || !data.success) {
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
