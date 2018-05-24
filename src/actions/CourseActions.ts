/// <reference path="../Contracts.d.ts" />

import { ActionTypes } from "../Constants";
import CourseApi from "../api/MockCourseApi";
import { ajaxCallBegin, ajaxCallError } from "./AjaxStatusActions";
import { ThunkAction } from "redux-thunk";

interface IActionResult {
    type: string;
    course: ICourse;
}

export function createCourseSuccess(course: ICourse): IActionResult {
    return { course, type: ActionTypes.COURSE_CREATE_SUCCESS };
}

export function updateCourseSuccess(course: ICourse): IActionResult {
    return { course, type: ActionTypes.COURSE_UPDATE_SUCCESS };
}

export function loadCoursesSuccess(courses: ICourse[]): ICourseActionData {
    return { courses, type: ActionTypes.COURSE_LOAD_SUCCESS };
}

export function deleteCourseSuccess(course: ICourse): ICourseActionData {
    return { course, type: ActionTypes.COURSE_DELETE_SUCCESS };
}

export function loadCourses(): ThunkAction<Promise<ICourseActionData>, any, null> {
    return (dispatch: (actionData: ICourseActionData) => ICourseActionData) => {
        dispatch(ajaxCallBegin());
        return CourseApi.getAllCourses().then((courses: ICourse[]) => {
            return dispatch(loadCoursesSuccess(courses));
            }).catch(error => {
                throw error;
            });
        };
}

export function deleteCourse(id: string) {
    return (dispatch: (actionData: ICourseActionData) => ICourseActionData) =>
        CourseApi.deleteCourse(id).then((course: ICourse) => {
            return dispatch(deleteCourseSuccess(course));
        }).catch(error => {
            throw error;
        });
}

export function saveCourse(course: ICourse) {
    return (dispatch: (actionData: ICourseActionData) => ICourseActionData, getState: any): Promise<void> => {
        dispatch(ajaxCallBegin());
        return CourseApi.saveCourse(course).then((savedCourse: ICourse) => {
            if (course.id) {
                dispatch(updateCourseSuccess(savedCourse));
            } else {
                dispatch(createCourseSuccess(savedCourse));
            }
        }).catch(error => {
            dispatch(ajaxCallError(error));
            throw error;
        });
    };
}
