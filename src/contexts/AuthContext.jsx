import { createContext, useContext, useState, useEffect } from 'react';
import { getToken, setToken, clearToken } from '@utils/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [temptoken, setTemptoken] = useState(null);

  useEffect(() => {
    // Check if there is a valid token in localStorage
    const token = getToken();
    if (token) {
      // If token exists, consider the temptoken as valid
      setTemptoken({ token });
    }
  }, []);

  const login = (token) => {
    setToken(token); // Store the token in localStorage
    setTemptoken({ token }); // Set the temptoken state with the token
  };

  const logout = () => {
    clearToken(); // Clear the token from localStorage
    setTemptoken(null); // Set the temptoken state to null
  };

  return (
    <AuthContext.Provider value={{ temptoken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
