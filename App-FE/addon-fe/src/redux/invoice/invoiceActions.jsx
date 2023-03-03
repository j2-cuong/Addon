import { message } from "antd";
import invoiceApi from "../../api/invoiceApi";
import { ADD_INVOICE, DELETE_INVOICE, EDIT_INVOICE, FIND_INVOICE_ID, GET_INVOICE_DATA } from "../typeApp";

export const getAllData = (params) => {
  console.log(params);
  return async (dispatch) => {
    await invoiceApi.get(params).then((response) => {
      dispatch({
        type: GET_INVOICE_DATA,
        payload: response,
        loading: false,
      });
    });
  };
};
export const searchByID = (params) => {
  return async (dispatch) => {
    await invoiceApi
      .findById(params)
      .then((response) => {
        dispatch({
          type: FIND_INVOICE_ID,
          payload: response?.data,
        });
      })
      .catch(() => {
        dispatch({
          type: FIND_INVOICE_ID,
          payload: null,
        });
      });
  };
};
export const addInvoice = (invoice) => {
  return async (dispatch) => {
    await invoiceApi
      .create(invoice)
      .then((response) => {
        dispatch({
          type: ADD_INVOICE,
          invoice,
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
export const updateInvoice = (invoice) => {
  return async (dispatch) => {
    await invoiceApi
      .edit(invoice)
      .then((response) => {
        dispatch({
          type: EDIT_INVOICE,
          invoice,
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
export const deleteInvoice = (params) => {
  return (dispatch) => {
    invoiceApi
      .delete(params)
      .then((response) => {
        dispatch({
          type: DELETE_INVOICE,
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
