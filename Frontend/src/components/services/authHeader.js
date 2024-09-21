const authHeader = () => {
  const token = sessionStorage.getItem('token');
  return token ? `Bearer ${token}` : null;
};

export default authHeader;
