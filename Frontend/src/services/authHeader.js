const authHeader = () => {
  const token = localStorage.getItem('token');
  return token ? `Bearer ${token}` : null;
};

export default authHeader;
