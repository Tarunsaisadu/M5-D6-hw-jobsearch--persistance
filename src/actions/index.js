export const addToFavouritesAction = (jobToAdd) => ({
  type: "ADD_TO_FAVS",
  payload: jobToAdd,
});

export const removeFromFavAction = (jobToRemove) => ({
  type: "REMOVE_FROM_FAV",
  payload: jobToRemove,
});

export const fetchjobsAction = (userQuery) => {
  return async (dispatch, getState) => {
    console.log("fetching the books...");
    const baseUrl = "https://strive-jobs-api.herokuapp.com/jobs?";
    try {
      let resp = await fetch(
        userQuery ? baseUrl + "?search=" + userQuery + "&limit=20" : baseUrl
      );
      if (resp.ok) {
        let details = await resp.json();
        console.log(details);
        dispatch({
          type: "FETCH_JOBS",
          payload: details.data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
