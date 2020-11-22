import * as axios from "axios";
import {BEARER_TOKEN} from "../constants";

export const createBaseClient = (baseUrl) => {
    const client = axios.create({
        baseUrl,
        headers: {
            "Authorization": "Bearer " + BEARER_TOKEN
        }
    });

    client.interceptors.request.use(config => {
        return config;
    }, error => Promise.reject(error));

    client.interceptors.response.use(response => {
        return response;
    }, error => Promise.reject(error));

    const {get, post, put, delete: destroy} = client;

    return {get, post, put, destroy};
}
