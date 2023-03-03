import { ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT, FIND_PRODUCT_ID, GET_PRODUCT_DATA } from "../typeApp";

const INITIAL_STATE = {
  data: null,
  messeage:""
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PRODUCT_DATA:
      return {
        ...state,
        data: action.payload?.data ,
        messeage:action.payload?.Mess,
      };
      case FIND_PRODUCT_ID:
        return {
          ...state,
          data: action.payload == "" ? null : action.payload,
        };
    case ADD_PRODUCT:
      return {
        ...state
      };
    case EDIT_PRODUCT : 
    return {
        ...state
    }
    case DELETE_PRODUCT : 
    return {
        ...state
    }
    default:
      return state;
  }
};

export default productReducer;
