/// <reference path="../Contracts.d.ts" />

import { ActionTypes } from "../Constants";
import * as _ from "lodash";
import InitialState from "./InitialState";

export default function courseReducer(state: ICourse[] = InitialState.courses, action: ICourseActionData) {
    switch (action.type) {
        case ActionTypes.COURSE_LOAD_SUCCESS:
            return action.courses;

        case ActionTypes.COURSE_CREATE_SUCCESS:
            return [
                ...state,
                Object.assign({}, action.course)
            ];

        case ActionTypes.COURSE_UPDATE_SUCCESS:
            return [
                ...state.filter(c => c.id !== action.course.id),
                Object.assign({}, action.course)
            ];

        default:
            return state;
    }
}
