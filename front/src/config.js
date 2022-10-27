import axios from "axios";

const BASE_URL = 'http://localhost:5050';

export const server = axios.create({
    baseURL: BASE_URL,
})