import { get, post } from "./api";

const baseURL = 'http://localhost:3030/data/shoes';

export const getAll = async () => {
    const result = await get(`${baseURL}?sortBy=_createdOn%20desc`);
    return result;
};

export const getOne = async (shoeId) => {
    const result = await get(`${baseURL}/${shoeId}`);
    return result;
};

export const create = async (shoeData) => post(baseURL, shoeData);