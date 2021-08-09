export const protectRoute = (to, from, next) => {
  if (localStorage.isAuthenticated) {
    next();
  } else {
    next({
      name: "Login",
    });
  }
};
