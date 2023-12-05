import { get, post } from "./api";

const baseURL = 'http://localhost:3030/users';

export async function login(email, password) {
    const result = await post(`${baseURL}/login`, { email, password });
    return result;
}

export async function register(email, password) {
    const result = await post(`${baseURL}/register`, { email, password });
    return result;
}
