export const getToken = () => {
  const token = localStorage.getItem("token");
  try {
    return token ? JSON.parse(token) : null;
  } catch (e) {
    // If it's not JSON, return the raw token
    return token;
  }
};

export const setToken = (token) => {
  const tokenValue = typeof token === "object" ? JSON.stringify(token) : token;
  localStorage.setItem("token", tokenValue);
};

export const clearToken = () => localStorage.removeItem("token");
