export const validateRegister = (formValues) => {

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const result = {};

    if (!formValues.email.match(emailPattern)) {
        alert('Invalid email');
        return;
    }

    if (formValues.password === '') {
        alert('Password is required');
        return;
    }

    if (formValues.confirmPassword === '') {
        alert('Confirm password is required');
        return;
    }

    if (formValues.password !== formValues.confirmPassword) {
        alert('Password missmatch');
        return;
    }

    return true;
}