// utils/auth.js
export const isTokenExpired = (token) => {
    if (!token) return true;
    const tokenPayload = JSON.parse(atob(token.split('.')[1])); // Decoding JWT token payload
    const expiryTime = tokenPayload.exp * 1000; // Convert expiry time to milliseconds
    console.log(expiryTime);
    return Date.now() >= expiryTime;
  };