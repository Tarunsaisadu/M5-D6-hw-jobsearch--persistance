import { initialState } from "../store";
const userQueryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_JOBS":
      console.log({ action: action.payload });

      return {
        ...state,
        details: action.payload,
      };
    default:
      return state;
  }
};

export default userQueryReducer;
