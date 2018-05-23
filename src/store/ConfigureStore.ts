import { createStore, applyMiddleware, compose } from "redux";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import { rootReducer } from "../reducers/rootReducer";
import thunk from "redux-thunk"

export default function configureStore(initialState?: any) {
    return createStore(rootReducer, initialState, compose(applyMiddleware(thunk, reduxImmutableStateInvariant())));
}