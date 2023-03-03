import { message } from "antd";
import permissionApi from "../../api/permissionApi";
import { ADD_PERMISSION, DELETE_PERMISSION, EDIT_PERMISSION, FIND_PERMISSION_ID, GET_PERMISSION_DATA } from "../typeApp";

export const getAllData = (params) => {
  return async (dispatch) => {
    await permissionApi.getall(params).then((response) => {
      dispatch({
        type: GET_PERMISSION_DATA,
        payload: response
      });
    })
  };
};
export const searchByID = (params) => {
  return async (dispatch) => {
    await permissionApi.findById(params).then((response) => {
      dispatch({
        type: FIND_PERMISSION_ID,
        payload: response?.data,
      })
    }).catch(()=>{
      dispatch({
        type: FIND_PERMISSION_ID,
        payload: null,
      })
    })
  };
};
export const addPermission = (permission) => {
  return async (dispatch) => {
    await permissionApi
      .create(permission)
      .then((response) => {
        console.log(response)
        dispatch({
          type: ADD_PERMISSION,
          permission,
        });
        if(response.status === 6){
          dispatch( getAllData({
            ClientType: "website",
            typeCondition: 1,
            PageSize: process.env.REACT_APP_MAX_VALUE,
            PageIndex: 1,
          }))
          message.success(response.message);
        }
        if(response.status === -14){
          return message.error(response.message)
        }
      })
      
      .catch((err) => message.error(err));
  };
};
export const updatePermission = (permission) => {
  return async (dispatch) => {
    await permissionApi
      .edit(permission)
      .then((response) => {
        console.log(response)
        dispatch({
          type: EDIT_PERMISSION,
          permission,
        });
       if(response.status ===2){
        dispatch( getAllData({
          ClientType: "website",
          typeCondition:1,
          PageSize: process.env.REACT_APP_MAX_VALUE,
          PageIndex: 1,
        }))
            message.success(response.message);
       }
      })
      
      .catch((err) => console.log(err));
  };
};
export const deletePermission = (params) => {
  return (dispatch) => {
      permissionApi.delete(params)
          .then((response) => {
            console.log(response)
              dispatch({
                  type: DELETE_PERMISSION,
                  payload: response.data,
              });
             if (response.status === 7){
              dispatch( getAllData({
                ClientType: "website",
                typeCondition:1,
                PageSize: process.env.REACT_APP_MAX_VALUE,
                PageIndex: 1,
              }))
               message.info(response.message);
             }
          })
         
          .catch((err) => message.error("Lỗi"));
  };
};