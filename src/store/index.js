import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import favouritesReducer from "../reducer/favourites";
import locationReducer from "../reducer/location";
import thunk from "redux-thunk";
import userQueryReducer from "../reducer/userQuery";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import { encryptTransform } from "redux-persist-transform-encrypt";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

export const initialState = {
  favs: {
    jobs: [], //test
  },
  location: {
    country: [],
  },

  details: [],
};

const persistConfig = {
  key: "root",
  storage,
  // transforms: [
  //   encryptTransform({
  //     secretKey: process.env.REACT_APP_ENCRYPT_KEY,
  //   }),
  // ],
};

const bigReducer = combineReducers({
  favs: favouritesReducer,
  location: locationReducer,
  details: userQueryReducer,
});
const persistedReducer = persistReducer(persistConfig, bigReducer);

export const configureStore = createStore(
  bigReducer,
  initialState,
  process.env.REACT_APP_DEVELOPMENT
    ? composeEnhancers(applyMiddleware(thunk))
    : compose(applyMiddleware(thunk))
);

export const persistor = persistStore(configureStore);

export default configureStore;
