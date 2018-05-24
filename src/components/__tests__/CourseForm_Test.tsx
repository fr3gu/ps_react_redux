import * as React from "react";
import * as TestUtils from "react-dom/test-utils";
import { createRenderer } from "react-test-renderer/shallow";

import { CourseForm } from "../courses/CourseForm";

function setup(saving?: boolean) {
    const props: any = {
        course: {}, saving: saving || false, errors: {}, allAuthors: [],
        onSave: () => {},
        onChange: () => {}
    };

    const renderer = createRenderer();
    renderer.render(<CourseForm {...props} />);
    const output = renderer.getRenderOutput();

    return {
        props,
        output,
        renderer
    };
}

describe("<CourseForm />", () => {
    it("renders form and h1", () => {
        const { output } = setup();

        expect(output.type).toBe("form");
        const [ h1 ] = output.props.children;
        expect(h1.type).toBe("h1");
    });

    it("save button is labeled \"Save\" while not saving", () => {
        const { output } = setup();
        const saveBtn = output.props.children[5];
        expect(saveBtn.props.children).toBe("Save");
    });

    it("save button is labeled \"Saving...\" while saving", () => {
        const { output } = setup(true);
        const saveBtn = output.props.children[5];
        expect(saveBtn.props.children).toBe("Saving...");
    });
});
