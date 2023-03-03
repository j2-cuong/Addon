import { message } from "antd";
import customerApi from "../../api/customerApi";
import { ADD_CUSTOMER, DELETE_CUSTOMER, EDIT_CUSTOMER, FIND_CUSTOMER_ID, GET_CUSTOMER_DATA } from "../typeApp";

export const getAllData = (params) => {
  console.log(params)
  return async (dispatch) => {
    await customerApi.getall(params).then((response) => {
      dispatch({
        type: GET_CUSTOMER_DATA,
        payload: response,
        loading: false,
      });
    })
  };
};
export const searchByID = (params) => {
  return async (dispatch) => {
    await customerApi.findById(params).then((response) => {
      dispatch({
        type: FIND_CUSTOMER_ID,
        payload: response?.data,
      })
    }).catch(()=>{
      dispatch({
        type: FIND_CUSTOMER_ID,
        payload: null,
      })
    })
  };
};
export const addCustomer = (customer) => {
  return async (dispatch) => {
    await customerApi
      .create(customer)
      .then((response) => {
        dispatch({
          type: ADD_CUSTOMER,
          customer,
        });
        if(response.status === 1){
          dispatch( getAllData({
            ClientType: "website",
            PageSize: process.env.REACT_APP_MAX_VALUE,
            PageIndex: 1,
          }))
          message.success(response.message);
         }
         if(response.status === -16){
          return message.error(response.message);
         }
      })
      .catch((err) => message.error(err));
  };
};
export const updateCustomer = (customer) => {
  return async (dispatch) => {
    await customerApi
      .edit(customer)
      .then((response) => {
        dispatch({
          type: EDIT_CUSTOMER,
          customer,
        });
        if(response.status  === 2){
            dispatch( getAllData({
              ClientType: "website",
              PageSize: process.env.REACT_APP_MAX_VALUE,
              PageIndex: 1,
            }))
          return message.success(response.message);
        }
      })
      .catch((err) => console.log(err));
  };
};
export const deleteCustomer = (params) => {
  return (dispatch) => {
      customerApi.delete(params)
          .then((response) => {
              dispatch({
                  type: DELETE_CUSTOMER,
                  payload: response.data,
              });
              if(response.status === 7){
                dispatch( getAllData({
                  ClientType: "website",
                  PageSize: process.env.REACT_APP_MAX_VALUE,
                  PageIndex: 1,
                }))
                 message.info(response.message);
              }
          })

          .catch((err) => message.error("Lỗi"));
  };
};