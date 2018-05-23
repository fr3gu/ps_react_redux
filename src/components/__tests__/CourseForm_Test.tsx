import * as React from 'react';
import * as TestUtils from 'react-dom/test-utils';
import { createRenderer } from 'react-test-renderer/shallow';

import { CourseForm } from '../courses/CourseForm';

function setup() {
    let props: any = {
        course: {}, saving: false, errors: {}, allAuthors: [],
        onSave: () => {},
        onChange: () => {}
    };
    
    let renderer = createRenderer();
    renderer.render(<CourseForm {...props} />);
    let output = renderer.getRenderOutput();

    return {
        props,
        output,
        renderer
    }
}

describe('<Counter />', () => {
  it('renders form and h1', () => {
    const { output } = setup();

    expect(output.type).toBe("form");
  })
});