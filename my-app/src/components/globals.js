// This is your globals.js file
let loggedInUser = null;

export const setLoggedInUser = (user) => {
  loggedInUser = user;
};

export const getLoggedInUser = () => {
  console.log("Logged in user: ", loggedInUser);
  return loggedInUser;
};
