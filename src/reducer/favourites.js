import { initialState } from "../store";

const favouritesReducer = (state = initialState.favs, action) => {
  switch (action.type) {
    case "ADD_TO_FAVS":
      console.log("Add to favs action inside reducer");
      return {
        ...state,

        jobs: [...state.jobs, action.payload],
      };

    case "REMOVE_FROM_FAV":
      return {
        ...state,

        jobs: state.jobs.filter((f, i) => i !== action.payload),
      };

    default:
      return state;
  }
};

export default favouritesReducer;
