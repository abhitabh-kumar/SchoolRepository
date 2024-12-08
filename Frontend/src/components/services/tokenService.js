import {jwtDecode } from "jwt-decode";

// A function to get username from the JWT token
function getUsernameFromToken(token) {
  try {
    const decoded = jwtDecode(token);
    console.log(decoded);
    return decoded.sub; // Assuming the username is in the "username" field
  } catch (error) {
    console.error("Invalid token", error);
    return null;
  }
}

export default getUsernameFromToken;