/// <reference path="../../Contracts.d.ts" />

import * as React from "react";
import expect from "expect";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Course, CourseErrorData } from "../../Models";
import { ManageCourseComponent } from "../courses/ManageCourse";

describe("<ManageCourseComponent />", () => {
    it("sets error message when trying to save with empty title", () => {
        Enzyme.configure({ adapter: new Adapter() });

        const props = {
            authors: [] as IOptionData[],
            course: new Course(),
            errors: new CourseErrorData(),
            saveCourse: (course: ICourse) => Promise.resolve(),
            history: {
                push: (path: string, state?: any): void => {}
            } as any,
            location: {} as any,
            match: {} as any,
            staticContext: {},
        };

        const wrapper = mount(<ManageCourseComponent {...props} />);
        const saveButton = wrapper.find("button").last();
        expect(saveButton.text()).toEqual("Save");
        saveButton.simulate("click");
        expect(wrapper.state().errors.title).toBe("Title must be at least 5 characters.");
    });
});
