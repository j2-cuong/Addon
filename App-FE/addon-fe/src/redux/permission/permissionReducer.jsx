import { ADD_PERMISSION, DELETE_PERMISSION, EDIT_PERMISSION, FIND_PERMISSION_ID, GET_PERMISSION_DATA } from "../typeApp";

const INITIAL_STATE = {
  data: null,
  messeage:"",
  loading: true
};

const permissionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PERMISSION_DATA:
      return {
        ...state,
        data: action.payload?.data == "" ? null : action.payload?.data ,
        messeage:action.payload?.Mess,
        loading: action.loading
      };
      case FIND_PERMISSION_ID:
        return {
          ...state,
          data: action.payload == "" ? null : action.payload,
        };
    case ADD_PERMISSION:
      return {
        ...state
      };
    case EDIT_PERMISSION : 
    return {
        ...state
    }
    case DELETE_PERMISSION : 
    return {
        ...state
    }
    default:
      return state;
  }
};

export default permissionReducer;
