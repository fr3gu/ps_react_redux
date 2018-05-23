/// <reference path="../Contracts.d.ts" />

import { ActionTypes } from "../Constants";

export function ajaxCallBegin(): IActionData {
    return { type: ActionTypes.AJAX_CALL_BEGIN };
}

export function ajaxCallError(error: any): IErrorActionData {
    return { error, type: ActionTypes.AJAX_CALL_ERROR };
}
