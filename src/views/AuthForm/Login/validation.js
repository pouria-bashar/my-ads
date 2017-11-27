import createValidator from 'utils/validationRunner';
import { password, validEmail } from 'utils/validationFactory';

const validations = {
  email: [validEmail],
  password: [password],
};


export default createValidator(validations);
