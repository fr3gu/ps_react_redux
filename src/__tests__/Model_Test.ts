import expect from "expect";
import { createStore } from "redux";
import { Course } from "../Models";

describe("Models", () => {
    describe("Course", () => {
        it("should generate id from title if not passed in constructor", () => {
            const course = new Course({ title: "Snickare utan liv" });
            const expected = "snickare-utan-liv";

            expect(course.id).toEqual(expected);
        });

        it("should NOT generate id from title if passed in constructor", () => {
            const course = new Course({ id: "idnummer1", title: "Snickare utan liv" });
            const expected = "idnummer1";

            expect(course.id).toEqual(expected);
        });
    });
});
