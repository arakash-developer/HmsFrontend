import { clearToken, getToken, setToken } from "@utils/auth";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [temptoken, setTemptoken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if there is a valid token in localStorage
    const token = getToken();
    if (token) {
      // If token exists, consider the temptoken as valid
      setTemptoken({ token });
    }
    setLoading(false);
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
    <AuthContext.Provider value={{ temptoken, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
