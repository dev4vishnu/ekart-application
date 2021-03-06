import * as yup from 'yup';

export const signInValidationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
  });

  export const signUpValidationSchema = yup.object({
    firstName: yup
    .string('Enter your First Name')
    .required('First Name is required'),
    lastName: yup
    .string('Enter your Last Name')
    .required('Last Name is required'),
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
    cpassword:  yup.string()
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
});


  