import axiosInstance from "./index";

const epT = "jadval/talim_turi/";
const epF = "jadval/fakultet/";
const epY = "jadval/yonalish/";
const epK = "jadval/kurs/";

const getT = () => axiosInstance.get(epT);
const getF = () => axiosInstance.get(epF);
const getY = () => axiosInstance.get(epY);
const getK = () => axiosInstance.get(epK);

const getbyId = (id) => {
    return axiosInstance.get(`${epK}${id}/`)
}
const post = (item) => {
    return axiosInstance.post(`${epK}`, item);
};
const put = (id, item) => {
    return axiosInstance.put(`${epK}${id}/`, item);
};
const del = (id) => {
    return axiosInstance.delete(`${epK}${id}/`);
};

const APIKurs = { getT, getF, getY, getK, getbyId, post, put, del };

export default APIKurs;
