import { ADD_SIZE, DELETE_SIZE, EDIT_SIZE, FIND_SIZE_ID, GET_SIZE_DATA } from "../typeApp";

const INITIAL_STATE = {
  data: null,
  messeage:"",
  loading: true
};

const sizeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_SIZE_DATA:
      return {
        ...state,
        data: action.payload?.data == "" ? null : action.payload?.data ,
        messeage:action.payload?.Mess,
        loading: action.loading
      };
      case FIND_SIZE_ID:
        return {
          ...state,
          data: action.payload == "" ? null : action.payload,
        };
    case ADD_SIZE:
      return {
        ...state
      };
    case EDIT_SIZE : 
    return {
        ...state
    }
    case DELETE_SIZE : 
    return {
        ...state
    }
    default:
      return state;
  }
};

export default sizeReducer;
