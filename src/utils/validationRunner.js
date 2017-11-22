import { isEmpty, flatten } from 'lodash';

const createValidator = (rules) => (data, rest) => {
  const errors = Object.keys(data).map(key => rules[key].map(rule => rule(data[key], rest)));
  return flatten(errors).filter(error => !isEmpty(error));
};

export default createValidator;
