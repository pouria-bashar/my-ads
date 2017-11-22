import createValidator from 'utils/validationRunner';
import { minLength, shouldBeginWithAlphabet } from 'utils/validationFactory';

const validations = {
  email: [minLength(100), shouldBeginWithAlphabet],
  password: [minLength(2)],
};


export default createValidator(validations);
