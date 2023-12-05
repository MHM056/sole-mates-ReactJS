const key = 'auth';

export function getUserData() {
    return JSON.parse(localStorage.getItem(key));
}

export function setUserData(data) {
    return localStorage.setItem(key, JSON.stringify(data));
}

export function clearUserData() {
    localStorage.removeItem(key);
}