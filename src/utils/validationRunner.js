const createValidator = (rules) => (data, rest) => {
  const errors = {};
  Object.keys(data).map(key => {
    rules[key].map(rule => {
      const error = rule(data[key], rest);
      if (error) {
        errors[key] = error;
      }
    });
    if (!errors[key]) {
      errors[key] = null;
    }
  });
  return errors;
};

export default createValidator;
