import * as Yup from 'yup';
export const LoginSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email must be a valid email address'),
    password: Yup.string().required('Password is required'),
});
export const RegisterSchema = Yup.object().shape({
    name: Yup.string().required('name required'),
    email: Yup.string().required('Email is required').email('Email must be a valid email address'),
    password: Yup.string().required('Password is required'),
});
export const UpdatePasswordSchema = Yup.object().shape({
    oldPassword: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    newPassword: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    confirmPassword: Yup.string()
        .required('Confirm password is required')
        .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
});

export const ResetSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email must be a valid email address'),
});

