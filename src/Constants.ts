import keyMirror from "keymirror";

export var ActionTypes = keyMirror({
    INITIALIZE: null,
    AUTHOR_CREATED: null,
    AUTHOR_UPDATED: null,
    AUTHOR_DELETED: null,
    COURSE_CREATED: null,
    COURSE_UPDATED: null,
    COURSE_DELETED: null
});

export class Events {
    static CHANGE: "change";
}