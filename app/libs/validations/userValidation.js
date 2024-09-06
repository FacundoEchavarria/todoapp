export function userValidation(email, password, userName) {
  if (!email) {
    return { valid: false, message: 'Email is required' };
  } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
    return { valid: false, message: 'Email is invalid' };
  } else if (email.length < 8) {
    return { valid: false, message: 'Email must be more than 8 characters' };
  } else if (email.length > 100) {
    return { valid: false, message: 'Email must be less than 100 characters' };
  }

  if (!userName) {
    return { valid: false, message: 'username is required' };
  } else if (!/^[a-zA-Z0-9._-]{3,16}$/.test(userName)) {
    return { valid: false, message: 'Username is invalid' };
  } else if (userName.length < 3) {
    return { valid: false, message: 'userName must be more than 3 characters' };
  } else if (userName.length > 50) {
    return {
      valid: false,
      message: 'userName must be less than 50 characters',
    };
  }

  if (!password) {
    return { valid: false, message: 'password is required' };
  } else if (password.length < 7) {
    return { valid: false, message: 'password must be more than 6 characters' };
  } else if (password.length > 50) {
    return {
      valid: false,
      message: 'password must be less than 50 characters',
    };
  }

  return { valid: true, message: 'Everything is ok' };
}
