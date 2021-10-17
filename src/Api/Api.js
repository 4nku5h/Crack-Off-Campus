import axios from "axios";
const baseUrl = 'https://raw.githubusercontent.com/weepiccoders/API-2.0/main/temp.json';

function getApiReference() {

    return axios.get(baseUrl);

}

export {
    getApiReference,
};