import { jwtDecode } from "jwt-decode";

export const getUsername = (token) => {
  const decoded = jwtDecode(token);
  // console.log(decoded);
  return decoded.sub;
}

export const getRole = (token) => {
  const decodedToken = jwtDecode(token);
  const role = decodedToken.scope;
  return role;
};

export const isTokenExpired = (token) => {
  if (!token) return true;
  const tokenPayload = JSON.parse(atob(token.split('.')[1])); // Decoding JWT token payload
  const expiryTime = tokenPayload.exp * 1000; // Convert expiry time to milliseconds
  console.log(expiryTime);
  return Date.now() >= expiryTime;
};


export const validateToken = (token) => {
    if(isTokenExpired(token)){
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      return null;
    }
    return `Bearer ${token}`;
}