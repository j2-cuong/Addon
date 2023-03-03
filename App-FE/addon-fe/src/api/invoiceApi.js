
import axiosClient from "./axiosClient";

const InvoiceApi = {
  get: params =>axiosClient.post(`/Invoice/GetAll`,params),
  create: params =>axiosClient.post(`/Invoice/Create`,params),
  edit: params =>axiosClient.post(`/Invoice/Update`,params),
  delete: params =>axiosClient.post(`/Invoice/Delete`,params),
  findById: params =>axiosClient.post(`/Invoice/FindByID`,params),
};

export default InvoiceApi;
