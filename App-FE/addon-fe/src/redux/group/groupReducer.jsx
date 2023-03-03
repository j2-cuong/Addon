import { ADD_GROUP, DELETE_GROUP, EDIT_GROUP, FIND_GROUP_ID, GET_GROUP_DATA } from "../typeApp";

const INITIAL_STATE = {
  data: null,
  isClose: false,
};

const groupReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_GROUP_DATA:
      return {
        ...state,
        data: action.payload?.data == "" ? null : action.payload?.data ,

      };
      case FIND_GROUP_ID:
        return {
          ...state,
          data: action.payload == "" ? null : action.payload
        };
    case ADD_GROUP:
      return {
        ...state,
        isClose:true,
      };
    case EDIT_GROUP : 
    return {
        ...state
    }
    case DELETE_GROUP : 
    return {
        ...state
    }
    default:
      return state;
  }
};

export default groupReducer;
