// store/actions.js
import axios from "axios";

export const fetchUsers = () => async (dispatch) => {
  try {
    const response = await axios.get("/api/users");
    dispatch({ type: "FETCH_USERS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "FETCH_USERS_FAILURE", payload: error });
  }
};
