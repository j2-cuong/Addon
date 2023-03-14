import { ADD_INVOICE, DELETE_INVOICE, EDIT_INVOICE, FIND_INVOICE_ID, GET_INVOICE_DATA } from "../typeApp";

const INITIAL_STATE = {
  data: null,
  messeage:"",
  loading: true
};

const InvoiceReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_INVOICE_DATA:
      return {
        ...state,
        data: action.payload?.data == "" ? null : action.payload?.data ,
        messeage:action.payload?.Mess,
        loading: action.loading
      };
      case FIND_INVOICE_ID:
        return {
          ...state,
          data: action.payload == "" ? null : action.payload,
        };
    case ADD_INVOICE:
      return {
        ...state
      };
    case EDIT_INVOICE : 
    return {
        ...state
    }
    case DELETE_INVOICE: 
    return {
        ...state
    }
    default:
      return state;
  }
};

export default InvoiceReducer;
