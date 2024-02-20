import axiosInstance from "./index";

const epT = "jadval/talim_turi/";
const epF = "jadval/fakultet/";
const epY = "jadval/yonalish/";
const epR = "jadval/jadval/";

const getT = () => axiosInstance.get(epT);
const getF = () => axiosInstance.get(epF);
const getY = () => axiosInstance.get(epY);
const getR = () => axiosInstance.get(epR);

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

const APIRasm = { getT, getF, getY, getR, getbyId, post, put, del };

export default APIRasm;
