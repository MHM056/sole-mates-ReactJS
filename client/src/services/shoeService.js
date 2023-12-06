import { get } from "./api";

const baseURL = 'http://localhost:3030/data/shoes';

export const getAll = async () => {
    const result = await get(`${baseURL}?sortBy=_createdOn%20desc`);
    return result;
};