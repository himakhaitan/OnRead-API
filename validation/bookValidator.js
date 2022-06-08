const validator = require("validator");
const isEmpty = require("../utils/isEmpty");

const bookValidator = (data) => {
  const errors = {};

  // Checking for empty fields
  data.title = !isEmpty(data.title) ? data.title : "";
  data.author = !isEmpty(data.author) ? data.author : "";
  data.genre = !isEmpty(data.genre) ? data.genre : "";

  // Validating the fields

  if (!validator.isLength(data.title, { min: 2, max: 50 })) {
    errors.title = "Title must be between 2 and 50 characters";
  }
  if (!validator.isLength(data.author, { min: 2, max: 50 })) {
    errors.author = "Author's name must be between 2 and 50 characters";
  }
  if (!validator.isLength(data.genre, { min: 2, max: 50 })) {
    errors.genre = "Genre must be between 2 and 50 characters";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

module.exports = bookValidator;
