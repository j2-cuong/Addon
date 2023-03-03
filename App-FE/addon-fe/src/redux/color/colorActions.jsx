import { message } from "antd";
import colorApi from "../../api/colorApi";
import { ADD_COLOR, DELETE_COLOR, EDIT_COLOR, FIND_COLOR_ID, GET_COLOR_DATA } from "../typeApp";

export const getAllData = (params) => {
  return async (dispatch) => {
    await colorApi.get(params).then((response) => {
      dispatch({
        type: GET_COLOR_DATA,
        payload: response,
        loading: false,
      });
    })
  };
};
export const searchByID = (params) => {
  return async (dispatch) => {
    await colorApi.findById(params).then((response) => {
      dispatch({
        type: FIND_COLOR_ID,
        payload: response?.data,
      })
    }).catch(()=>{
      dispatch({
        type: FIND_COLOR_ID,
        payload: null,
      })
    })
  };
};
export const addColor = (color) => {
  return async (dispatch) => {
    await colorApi
      .create(color)
      .then((response) => {
        dispatch({
          type: ADD_COLOR,
          color,
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
export const updateColor = (color) => {
  return async (dispatch) => {
    await colorApi
      .edit(color)
      .then(() => {
        dispatch({
          type: EDIT_COLOR,
          color,
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
export const deleteColor = (params) => {
  return (dispatch) => {
      colorApi.delete(params)
          .then((response) => {
              dispatch({
                  type: DELETE_COLOR,
                  payload: response.data,
              });
          })
          .then(() => {
              dispatch( getAllData({
               ClientType: "website",
               PageSize: process.env.REACT_APP_MAX_VALUE,
               PageIndex: 1,
             }))
              message.info(`Xóa thành công ${params.ColorID}`);
          })
          .catch((err) => message.error("Lỗi"));
  };
};