import { ADD_CUSTOMER, EDIT_CUSTOMER, FIND_CUSTOMER_ID, GET_CUSTOMER_DATA } from "../typeApp";

const INITIAL_STATE = {
  data: null,
  messeage:"",
  loading: true
};

const customerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CUSTOMER_DATA:
      return {
        ...state,
        data: action.payload?.data == "" ? null : action.payload?.data ,
        messeage:action.payload?.Mess,
        loading: action.loading
      };
      case FIND_CUSTOMER_ID:
        return {
          ...state,
          data: action.payload == "" ? null : action.payload,
        };
    case ADD_CUSTOMER:
      return {
        ...state
      };
    case EDIT_CUSTOMER : 
    return {
        ...state
    }
    case "DELETE_CUSTOMER" : 
    return {
        ...state
    }
    default:
      return state;
  }
};

export default customerReducer;
