import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://kspiapi.kspi.uz/',
    headers: {
        "Content-Type": "multipart/form-data"
    }
});
axiosInstance.interceptors.request.use((request) => {
    return request;
});
axiosInstance.interceptors.response.use((response) => {
    return response;
});

const ep = "home/yangilik/";

const get = () => axiosInstance.get(ep);

const getbyId = (id) => {
    return axiosInstance.get(`${ep}${id}/`);
};
const post = (item) => {
    return axiosInstance.post(`${ep}`, item);
};
const put = (id, item) => {
    return axiosInstance.put(`${ep}${id}/`, item);
};
const del = (id) => {
    return axiosInstance.delete(`${ep}${id}/`);
};

const APIYangilik = { get, getbyId, post, put, del };

export default APIYangilik;
