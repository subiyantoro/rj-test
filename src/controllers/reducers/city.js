import { GET_LIST_CITY, LOAD_API, LOAD_ERROR } from "../../configs/type";

const initState = {
  city: [],
  loading: false,
  error: false
};

export default (state = initState, action = {}) => {
  switch (action.type) {
    case LOAD_API: {
      return {
        ...state,
        loading: true
      };
    }
    case GET_LIST_CITY: {
      return {
        ...state,
        city: action.payload,
        loading: false
      };
    }
    case LOAD_ERROR: {
      return {
        ...state,
        loading: false
      };
    }
    default: {
      return state;
    }
  }
};
