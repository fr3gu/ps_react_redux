import { ActionTypes } from "../Constants";
import initialState from "./InitialState";

function actionTypeEndsWithSuccess(type: string) {
    return type.substring(type.length - 8) === "_SUCCESS";
}

export default function ajaxStatusReducer(state = initialState.ajaxCallsInProgress, action: IActionData) {
    if (action.type === ActionTypes.AJAX_CALL_BEGIN) {
        return state + 1;
    }
    if (action.type === ActionTypes.AJAX_CALL_ERROR ||
        actionTypeEndsWithSuccess(action.type)) {
        return state - 1;
    }
    return state;
}
