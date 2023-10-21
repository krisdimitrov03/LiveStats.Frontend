function request(method, url, data) {
    let options = {};
    //userContext

    if (method != 'GET') {
        options = {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }
    }

    //Add user check
    // if(user) {
    //     options.headers = {
    //         ...(options.headers),
    //         'Authorization': 'Bearer ' + user.accessToken
    //     }
    // }

    return fetch(url, options)
        .then(res => res.json());
}

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const del = request.bind(null, 'DELETE');