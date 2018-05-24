/// <reference path="../../Contracts.d.ts" />

import expect from "expect";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { authorsFormattedForDropdown } from "../Selectors";
import { MockAuthorData } from "../../api/MockAuthorData";

Enzyme.configure({ adapter: new Adapter() });

describe("<ManageCourseComponent />", () => {
    it("sets error message when trying to save with empty title", () => {
        const authors = MockAuthorData.authors;

        const expected: IOptionData[] = [
            { value: "cory-house", text: "Cory House" },
            { value: "scott-allen", text: "Scott Allen" },
            { value: "john-papa", text: "John Papa" }
        ];

        expect(authorsFormattedForDropdown(authors)).toEqual(expected);
    });
});
