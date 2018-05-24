/// <reference path="../Contracts.d.ts" />

import { ActionTypes } from "../Constants";
import * as _ from "lodash";
import InitialState from "./InitialState";

export default function authorReducer(state: IAuthor[] = InitialState.authors, action: IAuthorActionData) {
    switch (action.type) {
        case ActionTypes.AUTHOR_LOAD_SUCCESS:
            return action.authors;
        default:
            return state;
    }
}
