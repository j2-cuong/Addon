import { ADD_ACCOUNT, EDIT_ACCOUNT, FIND_ACCOUNT_ID, GET_ACCOUNT_DATA } from "../typeApp";

const INITIAL_STATE = {
  data: null,
  messeage:"",
  loading:true,
};

const accountReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ACCOUNT_DATA:
      return {
        ...state,
        data: action.payload?.data == "" ? null : action.payload?.data ,
        loading: action.loading
      };
      case FIND_ACCOUNT_ID:
        return {
          ...state,
          data: action.payload == "" ? null : action.payload,
        };
    case ADD_ACCOUNT:
      return {
        ...state
      };
    case EDIT_ACCOUNT : 
    return {
        ...state
    }
    default:
      return state;
  }
};

export default accountReducer;
