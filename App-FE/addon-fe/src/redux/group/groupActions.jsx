import { message } from "antd";
import groupApi from "../../api/groupApi";
import { ADD_GROUP, DELETE_GROUP, EDIT_GROUP, FIND_GROUP_ID, GET_GROUP_DATA } from "../typeApp";

export const getAllData = (params) => {
  return async (dispatch) => {
    await groupApi.get(params).then((response) => {
      dispatch({
        type: GET_GROUP_DATA,
        payload: response,
      });
    })
  };
};
export const searchByID = (params) => {
  return async (dispatch) => {
    await groupApi.findById(params).then((response) => {
      dispatch({
        type: FIND_GROUP_ID,
        payload: response?.data,
      })
    }).catch(()=>{
      dispatch({
        type:  FIND_GROUP_ID,
        payload: null,
      })
    })
  };
};
export const addGroup = (group) => {
  return async (dispatch) => {
    await groupApi
      .create(group)
      .then((response) => {
        dispatch({
          type: ADD_GROUP,
          group,
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
      .catch((err) => message.error("Lỗi"));
  };
};
export const updateGroup = (group) => {
  return async (dispatch) => {
    await groupApi
      .edit(group)
      .then((response) => {
        dispatch({
          type: EDIT_GROUP,
          group,
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
export const deleteGroup = (params) => {
  return (dispatch) => {
      groupApi.delete(params)
          .then((response) => {
              dispatch({
                  type: DELETE_GROUP,
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