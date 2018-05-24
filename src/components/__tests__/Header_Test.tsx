import * as React from "react";
import * as TestUtils from "react-dom/test-utils";
import { createRenderer } from "react-test-renderer/shallow";

import { Header } from "../common/Header";

function setup() {
    const props: any = {
        loading: false
    };

    const renderer = createRenderer();
    renderer.render(<Header {...props} />);
    const output = renderer.getRenderOutput();

    return {
        props,
        output,
        renderer
    };
}

describe("<Header />", () => {
    it("renders section#header", () => {
        const { output } = setup();

        expect(output.type).toBe("section");
    });
});
