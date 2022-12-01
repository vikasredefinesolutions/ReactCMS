export const __length = {
  email: { max: 64, min: 8 },
  password: { max: 24, min: 8 },
};

export const __messages = {
  email: {
    required: 'Please enter a valid email address.',
    validRequest: 'Please enter a valid email address.',
    invalid: '',
  },
  password: {
    invalid: '',
    required: 'Please enter a valid password',
  },
  credentials: {
    invalid: 'The username or password is incorrect.',
  },
};
