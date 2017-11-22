import { isEmpty } from 'lodash';


export const minLength = (min) => (value) => {
  if (!isEmpty(value) && value.length < min) {
    return 'Min length';
  }
  return null;
};

export const maxLength = (min) => (value) => {
  if (!isEmpty(value) && value.length > min) {
    return 'Min length';
  }
  return null;
};


export const isValidEmail = (value) => {
  if (!isEmpty(value) && value.length > min) {
    return 'Min length';
  }
  return null;
};


export const shouldBeginWithAlphabet = (value) => {
  const pattern = /^[a-zA-Z]/;
  if (!pattern.test(value)) {
    return 'Must start with alphabet';
  }
  return null;
};
