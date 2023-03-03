
import axiosClient from "./axiosClient";

const customerApi = {
  getall: params =>axiosClient.post(`/Customer/GetData`,params),
  create: params =>axiosClient.post(`/Customer/Create`,params),
  edit: params =>axiosClient.post(`/Customer/Update`,params),
  delete: params =>axiosClient.post(`/Customer/Delete`,params),
  findById: params =>axiosClient.post(`/Customer/FindByID`,params),
};

export default customerApi;
