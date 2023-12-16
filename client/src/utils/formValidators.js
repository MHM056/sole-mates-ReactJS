export const validateRegister = (formValues) => {

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formValues.email.match(emailPattern)) {
        alert('Invalid email');
        return;
    }

    if (formValues.password === '') {
        alert('Password is required');
        return;
    }
    
    if (formValues.password.length < 4 || formValues.password.length > 10) {
        alert('Password should be between 4 and 10 characters');
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