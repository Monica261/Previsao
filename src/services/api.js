import axios from 'axios';

//https://api.hgbrasil.com/weather?key=4f4c8f7c&lat=-23.682&lon=-46.875

export const key = '4f4c8f7c';

const api = axios.create({
    baseURL: 'https://api.hgbrasil.com'
});

export default api;