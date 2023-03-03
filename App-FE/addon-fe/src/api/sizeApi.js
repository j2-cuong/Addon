
import axiosClient from "./axiosClient";

const sizeApi = {
  get: params =>axiosClient.post(`/Size/GetAll`,params),
  create: params =>axiosClient.post(`/Size/Create`,params),
  edit: params =>axiosClient.post(`/Size/Update`,params),
  delete: params =>axiosClient.post(`/Size/Delete`,params),
  findById: params =>axiosClient.post(`/Size/FindByID`,params),
};

export default sizeApi;
