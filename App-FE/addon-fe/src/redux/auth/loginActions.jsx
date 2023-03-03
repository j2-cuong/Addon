import { message } from "antd";
import authApi from "../../api/authApi";
import { GET_AUTH } from "../typeApp";

export const auth = (params) => {
  console.log(params);
  return async (dispatch) => {
    await authApi.login(params).then((res) => {
      console.log(res)
      if (res.status === 4) {
        localStorage.setItem("token", res.token);
        localStorage.setItem("user", params.accountName);
        window.location.href = "/";
        message.success(res.message)
        console.log(res);
      }
      if (res.status === -12 || res.status === -10) {
        console.log(res)
        dispatch({
          type: GET_AUTH,
          message: res.message,
          loading: false,
        })
      }
      
    });
  };
};
