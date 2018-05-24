/// <reference path="../../Contracts.d.ts" />

import * as React from "react";
import expect from "expect";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Course, CourseErrorData } from "../../Models";

import * as courseActions from "../CourseActions";
import { ActionTypes } from "../../Constants";
import thunk, { ThunkAction } from "redux-thunk";
import configureMockStore from "redux-mock-store";
import nock from "nock";
import { ajaxCallBegin } from "../AjaxStatusActions";

describe("Course Actions", () => {
    describe("createCourseSuccess", () => {
        it("chould create a COURSE_CREATE_SUCCESS action", () => {
            const course = { id: "react-testing", title: "React Testing" };
            const expected: ICourseActionData = {
                course,
                type: ActionTypes.COURSE_CREATE_SUCCESS
            };

            const action = courseActions.createCourseSuccess(course);

            expect(action).toEqual(expected);
        });
    });
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("Async actions", () => {
    afterEach(() => {
        nock.cleanAll();
    });

    it("should create AJAX_CALL_BEGIN and COURSE_LOAD_SUCCESS when loading courses", (done) => {
        // Here's an example call to nock:
        // nock("http://localhost:5000/api/")
        // .get("/courses")
        // .reply(200, { body: { courses: [{ id: 1, title: "Test course", authorId: "author-id", category: "" }]}})

        const store = mockStore({ courses: [] });
        store.dispatch(courseActions.loadCourses() as any).then(() => {
            const actions = store.getActions() as IActionData[];
            expect(actions[0]).toEqual(ajaxCallBegin());
            expect(actions[1].type).toEqual(ActionTypes.COURSE_LOAD_SUCCESS);
            done();
        });
    });
});
