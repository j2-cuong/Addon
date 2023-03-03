import { message } from "antd";
import sizeApi from "../../api/sizeApi";
import { ADD_SIZE, DELETE_SIZE, EDIT_SIZE, FIND_SIZE_ID, GET_SIZE_DATA } from "../typeApp";

export const getAllData = (params) => {
  return async (dispatch) => {
    await sizeApi.get(params).then((response) => {
      dispatch({
        type: GET_SIZE_DATA,
        payload: response,
        loading: false,
      });
    })
  };
};
export const searchByID = (params) => {
  return async (dispatch) => {
    await sizeApi.findById(params).then((response) => {
      dispatch({
        type: FIND_SIZE_ID,
        payload: response?.data,
      })
    }).catch(()=>{
      dispatch({
        type: FIND_SIZE_ID,
        payload: null,
      })
    })
  };
};
export const addSize = (size) => {
  return async (dispatch) => {
    await sizeApi
      .create(size)
      .then((response) => {
        dispatch({
          type: ADD_SIZE,
          size,
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
export const updateSize = (size) => {
  return async (dispatch) => {
    await sizeApi
      .edit(size)
      .then((response) => {
        dispatch({
          type: EDIT_SIZE,
          size,
        });
        if(response.status === 2){
          dispatch( getAllData({
            ClientType: "website",
            PageSize: process.env.REACT_APP_MAX_VALUE,
            PageIndex: 1,
          }))
              message.success(response.message);
         }
      })
      .catch((err) => console.log(err));
  };
};
export const deleteSize = (params) => {
  return (dispatch) => {
      sizeApi.delete(params)
          .then((response) => {
              dispatch({
                  type: DELETE_SIZE,
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