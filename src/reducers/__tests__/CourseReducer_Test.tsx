/// <reference path="../../Contracts.d.ts" />

import * as React from "react";
import expect from "expect";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Course, CourseErrorData } from "../../Models";
import courseReducer from "../CourseReducer";

import * as courseActions from "../../actions/CourseActions";
import { ActionTypes } from "../../Constants";

describe("Course Reducer", () => {
    it("should add course when passed COURSE_CREATE_SUCCESS", () => {
        const initialState = [
            { id: "a", title: "A" },
            { id: "b", title: "B" }
        ];

        const newCourse = new Course({ title: "C" });

        const action = courseActions.createCourseSuccess(newCourse);

        const newState = courseReducer(initialState, action);

        expect(newState.length).toEqual(3);
        expect(newState[0].title).toEqual("A");
        expect(newState[1].title).toEqual("B");
        expect(newState[2].title).toEqual("C");
    });

    it("should update course when passed COURSE_UPDATE_SUCCESS", () => {
        const initialState = [
            { id: "a", title: "A" },
            { id: "b", title: "B" },
            { id: "c", title: "C" }
        ];

        const courseToUpdate = new Course({ id:"b", title:"B2" });
        const action = courseActions.updateCourseSuccess(courseToUpdate);

        const newState = courseReducer(initialState, action);
        const updatedCourse = newState.find(c => c.id === courseToUpdate.id);
        const untouchedCourse = newState.find(c => c.id === "a");

        expect(updatedCourse.title).toEqual("B2");
        expect(untouchedCourse.title).toEqual("A");
        expect(newState.length).toBe(3);
    });
});
