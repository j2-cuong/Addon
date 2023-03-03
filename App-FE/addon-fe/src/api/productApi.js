
import axiosClient from "./axiosClient";

const productApi = {
  get: params =>axiosClient.post(`/CategoryCommodity/GetData`,params),
  create: params =>axiosClient.post(`/CategoryCommodity/Create`,params),
  edit: params =>axiosClient.post(`/CategoryCommodity/Update`,params),
  delete: params =>axiosClient.post(`/CategoryCommodity/Delete`,params),
  // findById: params =>axiosClient.post(`/CategoryCommodity/FindByID`,params),
  uploadImage: params =>axiosClient.post(`CategoryCommodityImage/CreateCategoryCommodity`,params),
};

export default productApi;
