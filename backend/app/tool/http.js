import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

export var http = () => {
    return axios.create({
        baseURL: process.env.WHATSAPP_PROVIDER,
        headers: {
            'Accept': 'application/json',
        },
    });
}

export var httpJWT = (jwt) => {
    return axios.create({
        baseURL: process.env.WHATSAPP_PROVIDER,
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer '+ jwt
        },
    });
}
