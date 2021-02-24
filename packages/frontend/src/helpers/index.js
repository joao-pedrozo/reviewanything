const hasSpecialCharacters = (text) => {
  if (/[~`!#$%^&@*+=\-[\]\\';,/{}|\\":<>?]/g.test(text)) {
    return true;
  }

  return false;
};

const hasWhiteSpace = (text) => /\s/g.test(text);

const isValidUsername = (username) => {
  if (
    !hasSpecialCharacters(username)
    && !hasWhiteSpace(username)
    && !username.length < 4
    && !username.length > 12
  ) {
    return true;
  }

  return false;
};

export { isValidUsername };
