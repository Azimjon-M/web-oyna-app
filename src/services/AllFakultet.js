import axiosInstance from "./index";

const epT = "jadval/talim_turi/";
const epF = "jadval/fakultet/";
const epY = "jadval/yonalish/";
const epK = "jadval/kurs/";
const epR = "jadval/jadval/";

const getT = () => axiosInstance.get(epT);
const getF = () => axiosInstance.get(epF);
const getY = () => axiosInstance.get(epY);
const getK = () => axiosInstance.get(epK);
const get = () => axiosInstance.get(epR);

const getbyId = (id) => {
    return axiosInstance.get(`${epR}${id}/`);
};

const post = (item) => {
    return axiosInstance.post(`${epR}`, item);
};
const put = (id, item) => {
    return axiosInstance.put(`${epR}${id}/`, item);
};
const del = (id) => {
    return axiosInstance.delete(`${epR}${id}/`);
};

const APIAllFAkultet = { getT, getF, getY, getK, get, getbyId, post, put, del };

export default APIAllFAkultet;
