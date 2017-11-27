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


export const validEmail = (value) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(value)) {
    return 'Please enter a valid email';
  }
  return null;
};


export const password = (value) => {
  return null;
};
