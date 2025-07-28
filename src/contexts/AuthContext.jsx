import { createContext, useContext, useState, useEffect } from 'react';
import { getToken, setToken, clearToken } from '@utils/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if there is a valid token in localStorage
    const token = getToken();
    if (token) {
      // If token exists, consider the user as valid
      setUser({ token });
    }
  }, []);

  const login = (token) => {
    setToken(token); // Store the token in localStorage
    setUser({ token }); // Set the user state with the token
  };

  const logout = () => {
    clearToken(); // Clear the token from localStorage
    setUser(null); // Set the user state to null
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
