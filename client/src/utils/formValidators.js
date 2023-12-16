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
};

export const createForm = (values) => {

    const urlPattern = /^http?s:\/\//;

    if (values.brand === '') {
        alert('Brand is required');
        return;
    }

    if (values.model === '') {
        alert('Model is required');
        return;
    }

    if (values.model === '') {
        alert('Model is required');
        return;
    }

    if (values.imageUrl === '') {
        alert('Image is required');
        return;
    }

    if (!urlPattern.match(values.imageUrl)) {
        alert('Invalid URL');
        return;
    }

    if (values.release === '') {
        alert('Release is required');
        return;
    }

    if (values.designer === '') {
        alert('Designer is required');
        return;
    }

    if (values.value === '') {
        alert('Value is required');
        return;
    }
    
    return true;
};