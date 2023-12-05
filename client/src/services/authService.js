import { clearUserData, setUserData } from "../utils/localStorage";
import { get, post } from "./api";

const baseURL = 'http://localhost:3030/users';

export async function login(email, password) {
    const result = await post(`${baseURL}/login`, { email, password });
    setUserData(result);
}

export async function register(email, password) {
    const result = await post(`${baseURL}/register`, { email, password });
    setUserData(result);
}

export async function logout() {
    get(`${baseURL}/logout`);
    clearUserData();
}