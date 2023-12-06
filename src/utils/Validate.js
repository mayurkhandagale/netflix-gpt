export const checkValidData = (email, password, name) => {
  const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  const isValidName = /^[A-Za-z][A-Za-z0-9_]{3,29}$/.test(name);

  if (!isValidName) return "Name is Invalid";
  if (!isValidEmail) return "Email is Invalid";
  if (!isValidPassword) return "Password is Invalid";

  return null;
}