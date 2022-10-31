export const getToken = () => {
  return localStorage.getItem("token") || null;
};

export const getUser = () => {
  return localStorage.getItem("user");
};

export const getAdmin = () => {
  return localStorage.getItem("admin");
};

export const remove = (navigate) => {
  localStorage.clear();
  navigate("/");
};

export const admin = (admin) => {
  localStorage.setItem("admin", admin);
};

export const User = (user) => {
  localStorage.setItem("user", user);
};
