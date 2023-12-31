import axios from 'axios';
const api = axios.create({
    baseURL: 'http://localhost:2525'
});


export const GET = async (url) => {
    try {
        const resp = await api.get(url);
        return resp.data;
    } catch (error) {
        handleError(error);
    }
}

export const POST = async (url, body) => {
    try {
        const resp = await api.post(url, body);
        return resp.data;
    } catch (error) {
        handleError(error);
    }
}

const handleError = (error) => {
    if (typeof (error) == 'string') {
        alert(error)
    } else if (error.response) {
        alert(error.response.data.message);
    } else {
        alert(error.message);
    }
}