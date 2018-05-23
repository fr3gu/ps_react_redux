import { combineReducers } from "redux";
import courses from "./CourseReducer";
import authors from "./AuthorReducer";
import ajaxCallsInProgress from "./AjaxStatusReducer";

export const rootReducer = combineReducers({
    courses,
    authors,
    ajaxCallsInProgress
});