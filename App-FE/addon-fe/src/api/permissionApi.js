
import axiosClient from "./axiosClient";

const permissionApi = {
  getall: params =>axiosClient.post(`/Permission/GetDataNew`,params),
  create: params =>axiosClient.post(`/Permission/Create`,params),
  edit: params =>axiosClient.post(`/Permission/Update`,params),
  delete: params =>axiosClient.post(`/Permission/Delete`,params),
  findById: params =>axiosClient.post(`/Permission/FindByID`,params),
};

export default permissionApi;
