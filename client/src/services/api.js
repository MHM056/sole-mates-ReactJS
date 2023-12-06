async function request(method, url, data) {

    const options = {
        method,
        headers: {}
    }
    
    const userData = JSON.parse(localStorage.getItem('auth'));

    if (userData) {
        options.headers['X-Authorization'] = userData.accessToken;
    }

    if (data !== undefined) {
        options.headers['Content-Type'] = 'application/json',
            options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(url, options);

        let result;
        if (response.status !== 204) {
            result = await response.json();
        }

        if (response.ok == false) {
            // if (response.status == 403) {
            //     localStorage.clear();
            // }
            const error = result;
            throw error;
        }

        return result;

    } catch (error) {
        if(error.message == 'Resource not found') {
            return [];
        }
        alert(error.message);
        throw error;
    }
};

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const del = request.bind(null, 'DELETE');