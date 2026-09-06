const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

export const getApiUrl = (endpoint) => {
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  if (API_BASE_URL.endsWith('/api') && cleanEndpoint.startsWith('/api')) {
    return `${API_BASE_URL.replace(/\/api$/, '')}${cleanEndpoint}`;
  }
  return `${API_BASE_URL}${cleanEndpoint}`;
};

export const apiFetch = async (endpoint, options = {}, tokenOverride = null) => {
  const url = getApiUrl(endpoint);

  const token = tokenOverride || localStorage.getItem('accessToken') || sessionStorage.getItem('accessToken');

  const headers = {
    'Content-Type': 'application/json',
    ...(options.headers || {}),
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const config = {
    ...options,
    headers,
  };

  try {
    const response = await fetch(url, config);

    if (response.status === 401) {
      localStorage.removeItem('accessToken');
      sessionStorage.removeItem('accessToken');
      localStorage.removeItem('user');
      // If unauthorized on protected route, redirect to login
      if (!window.location.pathname.startsWith('/login') && !window.location.pathname.startsWith('/register')) {
        window.location.href = `/login?message=${encodeURIComponent('Session expired. Please log in again.')}`;
      }
    }

    const contentType = response.headers.get('content-type');
    let data;
    if (contentType && contentType.includes('application/json')) {
      data = await response.json();
    } else {
      data = { message: await response.text() };
    }

    if (!response.ok) {
      const errorMsg = data.message || `Request failed with status ${response.status}`;
      const err = new Error(Array.isArray(errorMsg) ? errorMsg.join(', ') : errorMsg);
      err.status = response.status;
      err.data = data;
      throw err;
    }

    return data;
  } catch (err) {
    throw err;
  }
};
