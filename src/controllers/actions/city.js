import axios from "axios";
import { LOAD_API, LOAD_ERROR } from "../../configs/type";
import { baseUrl } from "../../configs/env";

export const getListCity = () => {
  return async (dispatch) => {
    dispatch({
      type: LOAD_API
    });
    axios.get(baseUrl).catch((e) => {
      dispatch({
        type: LOAD_ERROR
      });
    });
  };
};
