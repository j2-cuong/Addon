import { GET_AUTH } from "../typeApp";

const INITIAL_STATE = {
  message:"",
  loading: true
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_AUTH:
      return {
        ...state,
        message:action.message,
        loading: action.loading
      };
    default:
      return state;
  }
};

export default loginReducer;
