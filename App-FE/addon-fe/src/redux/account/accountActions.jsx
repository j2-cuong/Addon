import { message } from "antd";
import accountApi from "../../api/accountApi";
import { ADD_ACCOUNT, EDIT_ACCOUNT, FIND_ACCOUNT_ID, GET_ACCOUNT_DATA } from "../typeApp";

export const getAllData = (params) => {
  return async (dispatch) => {
    await accountApi.get(params).then((response) => {
      dispatch({
        type: GET_ACCOUNT_DATA,
        payload: response,
        loading: false,
      });
    });
  };
};
export const searchByID = (params) => {
  return async (dispatch) => {
    await accountApi.findById(params).then((response) => {
      dispatch({
        type: FIND_ACCOUNT_ID,
        payload: response?.data,
      })
    }).catch(()=>{
      dispatch({
        type: FIND_ACCOUNT_ID,
        payload: null,
      })
    })
  };
};
export const addUser = (user) => {
  return async (dispatch) => {
    await accountApi
      .create(user)
      .then((response) => {
        dispatch({
          type: ADD_ACCOUNT,
          user,
        });
      })
      .then(() => {
        dispatch( getAllData({
          ClientType: "website",
          PageSize: process.env.REACT_APP_MAX_VALUE,
          PageIndex: 1,
        }))
        message.success("Đã thêm thành công");
      })
      .catch((err) => message.error(err));
  };
};
export const updateUser = (user) => {
  return async (dispatch) => {
    await accountApi
      .edit(user)
      .then(() => {
        dispatch({
          type: EDIT_ACCOUNT,
          user,
        });
      })
      .then(() => {
     dispatch( getAllData({
      ClientType: "website",
      PageSize: process.env.REACT_APP_MAX_VALUE,
      PageIndex: 1,
    }))
        message.success("Cập nhật thành công");
      })
      .catch((err) => console.log(err));
  };
};
