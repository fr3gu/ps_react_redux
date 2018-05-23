import keyMirror from "keymirror";

export const ActionTypes = keyMirror({
    COURSE_CREATE_SUCCESS: null,
    COURSE_UPDATE_SUCCESS: null,
    COURSE_DELETE_SUCCESS: null,
    COURSE_LOAD_SUCCESS: null,
    // AUTHOR_CREATED: null,
    // AUTHOR_UPDATED: null,
    // AUTHOR_DELETE_SUCCESS: null,
    AUTHOR_LOAD_SUCCESS: null,
    AJAX_CALL_BEGIN: null,
    AJAX_CALL_END: null,
    AJAX_CALL_ERROR: null
});

export class Events {
    static CHANGE: "change";
}
