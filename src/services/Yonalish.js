import axiosInstance from "./index";

const epT = "jadval/talim_turi/";
const epF = "jadval/fakultet/";
const epY = "jadval/yonalish/";

const getT = () => axiosInstance.get(epT);
const getF = () => axiosInstance.get(epF);
const getY = () => axiosInstance.get(epY);

const getbyId = (id) => {
    return axiosInstance.get(`${epY}${id}/`)
}
const post = (item) => {
    return axiosInstance.post(`${epY}`, item);
};
const put = (id, item) => {
    return axiosInstance.put(`${epY}${id}/`, item);
};
const del = (id) => {
    return axiosInstance.delete(`${epY}${id}/`);
};

const APIYonalish = { getT, getF, getY, getbyId, post, put, del };

export default APIYonalish;
