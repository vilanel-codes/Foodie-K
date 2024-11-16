import axios from 'axios';
import { SERVICE_URL } from './variables';

export const serviceGet = async (path, headers) => {
    return new Promise((resolve, reject) => {
        axios 
            .get(`${SERVICE_URL}/${path}`, {
                headers: headers
            })
            .then(function (response) {
                resolve(response.data);
            }) 
            .catch(function (error) {
                reject(error);
            });
    });
};

export const servicePost = async (path, payload, headers = null) => {
    return new Promise((resolve, reject) => {
        axios
            .post(`${SERVICE_URL}/${path}`, payload, {
                headers: headers,
            })
            .then(function (response) {
                resolve(response.data);
            })
            .catch(function (error) {
                reject(error);
            });
    });
};

export const servicePut = async (path, payload, headers = null) => {
    return new Promise((resolve, reject) => {
        axios
            .put(`${SERVICE_URL}/${path}`, payload, {
                headers: headers,
            })
            .then(function (response) {
                resolve(response.data);
            })
            .catch(function (error) {
                reject(error);
            });
    });
};

export const serviceDelete = async (path, headers) => {
    return new Promise((resolve, reject) => {
        axios
            .delete(`${SERVICE_URL}/${path}`, {
                headers: headers
            })
            .then(function (response) {
                resolve(response.data);
            })
            .catch(function (error) {
                reject(error);
            });
    });
};