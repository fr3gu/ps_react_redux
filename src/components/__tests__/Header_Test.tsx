import * as React from 'react';
import * as TestUtils from 'react-dom/test-utils';
import { createRenderer } from 'react-test-renderer/shallow';

import { Header } from '../common/Header';

function setup() {
    let props: any = {
        loading: false
    };
    
    let renderer = createRenderer();
    renderer.render(<Header {...props} />);
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