/// <reference path="../Contracts.d.ts" />

import { ActionTypes } from "../Constants";
import * as _ from "lodash";
import InitialState from "./InitialState";

var _clone = function(item: any): any {
	return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

export default function courseReducer(state: ICourse[] = InitialState.courses, action: ICourseActionData) {
    switch(action.type) {
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