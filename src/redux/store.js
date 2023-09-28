import { createStore } from "redux";
import { rootReducer } from "./moduls";

const store = createStore(rootReducer);
export default store;