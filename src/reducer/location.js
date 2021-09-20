import { initialState } from "../store";

const locationReducer = (state = initialState.location, action) => {
  switch (action.type) {
    case "SET_LOCATION":
      return {
        country: action.payload,
      };
    default:
      return state;
  }
};

export default locationReducer;
