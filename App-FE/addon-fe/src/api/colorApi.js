
import axiosClient from "./axiosClient";

const colorApi = {
  get: params =>axiosClient.post(`/Color/GetAll`,params),
  create: params =>axiosClient.post(`/Color/Create`,params),
  edit: params =>axiosClient.post(`/Color/Update`,params),
  delete: params =>axiosClient.post(`/Color/Delete`,params),
  findById: params =>axiosClient.post(`/Color/FindByID`,params),
};

export default colorApi;
