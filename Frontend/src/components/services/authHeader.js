// export default function authHeader() {
//   // console.log("Line No. 3");
//     // const token = sessionStorage.getItem('token'); // Retrieve the token from localStorage
//     const token = JSON.parse(sessionStorage.getItem('token'));
//     // console.log("Line No. 3");
//     // console.log(token);
  
//     if (token) {
//       return { 
//         'Authorization': `Bearer ${token}`,  // Add the Bearer prefix
//         'Content-Type': 'application/json', // Add Content-Type header
//       };
//     }
  
//     return {}; // Return an empty object if there's no token
//   }

// authHeader.js

const authHeader = () => {
  const token = sessionStorage.getItem('token');
  return token ? `Bearer ${token}` : null;
};

export default authHeader;
