import { ADD_COLOR, DELETE_COLOR, EDIT_COLOR, FIND_COLOR_ID, GET_COLOR_DATA } from "../typeApp";

const INITIAL_STATE = {
  data: null,
  messeage:"",
  loading: true
};

const colorReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_COLOR_DATA:
      return {
        ...state,
        data: action.payload?.data == "" ? null : action.payload?.data ,
        messeage:action.payload?.Mess,
        loading: action.loading
      };
      case FIND_COLOR_ID:
        return {
          ...state,
          data: action.payload == "" ? null : action.payload,
        };
    case ADD_COLOR:
      return {
        ...state
      };
    case EDIT_COLOR : 
    return {
        ...state
    }
    case DELETE_COLOR : 
    return {
        ...state
    }
    default:
      return state;
  }
};

export default colorReducer;
