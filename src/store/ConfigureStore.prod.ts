import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "../reducers/rootReducer";
import thunk from "redux-thunk";

export default function configureStore(initialState?: any) {
    console.log("hej från prod");
    return createStore(rootReducer, initialState, compose(applyMiddleware(thunk)));
}
