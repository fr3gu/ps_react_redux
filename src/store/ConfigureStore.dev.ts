import { createStore, applyMiddleware, compose } from "redux";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from "../reducers/rootReducer";
import thunk from "redux-thunk";

export default function configureStore(initialState?: any) {
    console.log("hej från dev");
    return createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk, reduxImmutableStateInvariant())));
}
