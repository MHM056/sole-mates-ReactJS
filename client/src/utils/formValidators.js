export const validateRegister = (data) => {

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const result = {};

    if (!data.email.match(emailPattern)) {
        result.email = 'Invalid email';
    }

    if (data.password === '') {
        result.password = 'Field is required';
    }

    if (data.confirmPassword === '') {
        result.confirmPassword = 'Field is required';
    }

    if (data.password !== data.confirmPassword) {
        result.password = 'Password missmatch';
        result.confirmPassword = 'Password missmatch';
    }

    if (result.hasOwnProperty('email') ||
        result.hasOwnProperty('password') ||
        result.hasOwnProperty('confirmPassword')) {
            return result;
        }

        return true;
}