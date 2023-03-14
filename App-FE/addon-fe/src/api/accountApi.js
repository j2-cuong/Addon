
import axiosClient from "./axiosClient";

const accountApi = {
  get: params =>axiosClient.post(`/Account/GetAll`,params),
  create: params =>axiosClient.post(`/Account/Create`,params),
  edit: params =>axiosClient.post(`/Account/Update`,params),
  delete: params =>axiosClient.post(`/Account/Delete`,params),
  findById: params =>axiosClient.post(`/Account/FindByID`,params),

};

export default accountApi;
