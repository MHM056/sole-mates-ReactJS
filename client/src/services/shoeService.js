import { del, get, post, put } from "./api";

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

export const search = async (searchValue) => {
    const query = encodeURIComponent(searchValue);
    const result = await get(`${baseURL}?where=brand%20LIKE%20%22${query}%22`);
    return result;
};

export const edit = async (shoeId, shoeData) => put(`${baseURL}/${shoeId}`, shoeData);

export const remove = async (shoeId) => del(`${baseURL}/${shoeId}`);