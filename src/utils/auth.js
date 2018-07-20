export const isLoggedIn = () => {
  // verify the token
  const token = localStorage.getItem("accessToken");

  if (token) {
    return true;
  }

  return false;
};
