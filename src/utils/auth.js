const TOKEN_KEY = 'auth_token';

export const setToken = (token) => {
  try {
    console.log('auth.js: Setting token in localStorage:', token);
    localStorage.setItem(TOKEN_KEY, token);
  } catch (error) {
    console.error('Error setting token in localStorage:', error);
  }
};

export const getToken = () => {
  try {
    return localStorage.getItem(TOKEN_KEY);
  } catch (error) {
    console.error('Error getting token from localStorage:', error);
    return null;
  }
};

export const removeToken = () => {
  try {
    console.log('auth.js: Removing token from localStorage');
    localStorage.removeItem(TOKEN_KEY);
  } catch (error) {
    console.error('Error removing token from localStorage:', error);
  }
};

export const isLoggedIn = () => {
  return !!getToken();
};
