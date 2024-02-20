import axiosInstance from "./index";

const epT = "jadval/talim_turi/";
const epF = "jadval/fakultet/";

const getT = () => axiosInstance.get(epT);
const getF = () => axiosInstance.get(epF);
const getbyId = (id) => {
    return axiosInstance.get(`${epF}${id}/`)
}
const post = (item) => {
    return axiosInstance.post(`${epF}`, item);
};
const put = (id, item) => {
    return axiosInstance.put(`${epF}${id}/`, item);
};
const del = (id) => {
    return axiosInstance.delete(`${epF}${id}/`);
};

const APIFakultet = { getT, getF, getbyId, post, put, del };

export default APIFakultet;
