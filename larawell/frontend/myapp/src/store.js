import Root_reducers from "./redux_reducers";

import { createStore } from "redux";

const store = createStore(Root_reducers);

export default store;