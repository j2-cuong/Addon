import { message } from "antd";
import productApi from "../../api/productApi";
import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  EDIT_PRODUCT,
  FIND_PRODUCT_ID,
  GET_PRODUCT_DATA,
} from "../typeApp";

export const getAllData = (params) => {
  return async (dispatch) => {
    await productApi.get(params).then((response) => {
      dispatch({
        type: GET_PRODUCT_DATA,
        payload: response,
      });
    });
  };
};
export const searchByID = (params) => {
  return async (dispatch) => {
    await productApi
      .findById(params)
      .then((response) => {
        dispatch({
          type: FIND_PRODUCT_ID,
          payload: response?.data,
        });
      })
      .catch(() => {
        dispatch({
          type: FIND_PRODUCT_ID,
          payload: null,
        });
      });
  };
};
export const addProduct = (product) => {
  return async (dispatch) => {
    await productApi
      .create(product)
      .then((response) => {
        dispatch({
          type: ADD_PRODUCT,
          product,
        });
        if (response.status === 1) {
          dispatch(
            getAllData({
              clientType: "website",
              pageSize: process.env.REACT_APP_MAX_VALUE,
              pageIndex: 1,
              typeCondition: 1,
              typeGet: 1,
            })
          );
          message.success(response.message);
        }
        if (response.status === -16) {
          return message.error(response.message);
        }
      })
      .catch((err) => message.error(err));
  };
};
export const updateProduct = (product) => {
  return async (dispatch) => {
    await productApi
      .edit(product)
      .then((response) => {
        dispatch({
          type: EDIT_PRODUCT,
          product,
        });
        if (response.status === 2) {
          dispatch(
            getAllData({
              clientType: "website",
              pageSize: process.env.REACT_APP_MAX_VALUE,
              pageIndex: 1,
              typeCondition: 1,
              typeGet: 1,
            })
          );
          return message.success(response.message);
        }
      })
      .catch((err) => console.log(err));
  };
};
export const deleteProduct = (params) => {
  return (dispatch) => {
    productApi
      .delete(params)
      .then((response) => {
        dispatch({
          type: DELETE_PRODUCT,
          payload: response.data,
        });
        if (response.status === 7) {
          dispatch(
            getAllData({
              clientType: "website",
              pageSize: process.env.REACT_APP_MAX_VALUE,
              pageIndex: 1,
              typeCondition: 1,
              typeGet: 1,
            })
          );
          message.info(response.message);
        }
      })

      .catch((err) => message.error("Lỗi"));
  };
};
