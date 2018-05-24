/// <reference path="../../Contracts.d.ts" />

import expect from "expect";
import { createStore } from "redux";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import thunk, { ThunkAction } from "redux-thunk";

import { Course, CourseErrorData } from "../../Models";
import { ActionTypes } from "../../Constants";
import * as courseActions from "../../actions/CourseActions";
import * as ajaxStatusActions from "../../actions/AjaxStatusActions";
import { rootReducer } from "../../reducers/RootReducer";
import InitialState from "../../reducers/InitialState";

describe("Store", () => {
    it("should handle creating courses", () => {
        const store = createStore(rootReducer, InitialState);
        const course = new Course({ title: "Clean Code" });

        const action = courseActions.createCourseSuccess(course);
        store.dispatch(action);

        const actual = store.getState().courses[0];

        const expected = new Course({ title: "Clean Code" });

        expect(actual).toEqual(expected);
    });

    it("should handle multiple actions", () => {
        const state = InitialState;
        state.courses.push(new Course({ title: "Existing course 1" }));
        state.courses.push(new Course({ id: "existing-2", title: "Existing course 2" }));

        const store = createStore(rootReducer, state);
        const course1 = new Course({ title: "New course 1" });
        const course2 = new Course({ title: "New course 2" });
        const updatedCourse = new Course({ id: "existing-2", title: "Existing course 2 modified" });

        const action1 = courseActions.createCourseSuccess(course1);
        const action2 = courseActions.createCourseSuccess(course2);
        const action3 = courseActions.updateCourseSuccess(updatedCourse);

        store.dispatch(action1);
        store.dispatch(action2);
        store.dispatch(action3);

        const expected = new Course({ id: "existing-2", title: "Existing course 2 modified" });

        expect(store.getState().courses.length).toEqual(4);
        expect(store.getState().courses.find(c => c.id === expected.id)).toEqual(expected);
    });
});
