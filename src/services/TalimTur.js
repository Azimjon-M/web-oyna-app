import axiosInstance from "./index";

const ep = "jadval/talim_turi/";

const get = () => axiosInstance.get(ep);
const getbyId = (id) => {
    return axiosInstance.get(`${ep}${id}/`)
}
const post = (item) => {
    return axiosInstance.post(`${ep}`, item);
};
const put = (id, item) => {
    return axiosInstance.put(`${ep}${id}/`, item);
};
const del = (id) => {
    return axiosInstance.delete(`${ep}${id}/`);
};

const APITalimTur = { get, getbyId, post, put, del };

export default APITalimTur;
