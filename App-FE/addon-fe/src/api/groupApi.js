
import axiosClient from "./axiosClient";

const groupApi = {
  get: params =>axiosClient.post(`/Group/GetAll`,params),
  create: params =>axiosClient.post(`/Group/Create`,params),
  edit: params =>axiosClient.post(`/Group/Update`,params),
  delete: params =>axiosClient.post(`/Group/Delete`,params),
  findById: params =>axiosClient.post(`/Group/FindByID`,params),
};

export default groupApi;
