export default {
  name: {
    presence: true,
  },
  email: {
    presence: true,
    email: true,
  },
  password: {
    presence: true,
    length: {
      minimum: 8,
    },
  },
  passwordConfirmation: {
    presence: true,
    length: {
      minimum: 8,
    },
    equality: { attribute: 'password' },
  },
  gender: {
    presence: true,
  },
};
