import UserContext from "../contexts/UserContext";
import * as cookieService from "./cookieService"

function request(method, url, data, user = null) {
    let options = {};

    if (method !== 'GET') {
        options = {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }
    }

    if(user) {
        options.headers = {
            ...(options.headers),
            'Authorization': 'Bearer ' + cookieService.getCookie('Auth-Token')
        }
    }

    return fetch(url, options)
        .then(res => res.json());
}

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const del = request.bind(null, 'DELETE');