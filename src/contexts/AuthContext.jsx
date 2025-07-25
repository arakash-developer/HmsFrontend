import { createContext, useContext, useState, useEffect } from 'react';
import { getToken, setToken, clearToken, decodeToken } from '@utils/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // NEW

  useEffect(() => {
    const token = getToken();
    if (token) {
      const decoded = decodeToken(token);

      // Optional: handle token expiration
      if (decoded && decoded.exp * 1000 > Date.now()) {
        setUser(decoded);
      } else {
        clearToken();
        setUser(null);
      }
    }
    setLoading(false); // Done checking token
  }, []);

  const login = (token) => {
    setToken(token);
    const decoded = decodeToken(token);
    setUser(decoded);
  };

  const logout = () => {
    clearToken();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
