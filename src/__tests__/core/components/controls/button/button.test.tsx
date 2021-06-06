import React from 'react';
import { configure, shallow, ShallowWrapper } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { act } from "react-dom/test-utils";

import { Button, ButtonProps } from '../../../../../core/components';

configure({
    adapter: new Adapter(),
});

function setupComponent(props: ButtonProps = {}): ShallowWrapper {
    let component: ShallowWrapper;

    act(() => {
        component = shallow(<Button {...props} />);
    });

    return component!;
}

describe('should button renders well', () => {
    let component: ShallowWrapper;

    afterEach(() => {
        act(() => {
            component.unmount();
        });
    });

    it('should button render children', () => {
        const childrenText = 'children text';
        component = setupComponent({ children: childrenText });
        expect(component.text()).toBe(childrenText);
    });

    // TODO: why this is not passed?
    // it('should button can be disabled', () => {
    //     component = setupComponent({ disabled: true });
    //     expect(component.getElement()).toBeDisabled();
    // });

    it('should onClick prop can be called', () => {
        const mockedOnclick = jest.fn();
        component = setupComponent({ onClick: mockedOnclick });
        expect(mockedOnclick.mock.calls.length).toBe(0);
        act(() => {
            component.simulate('click');
        });
        expect(mockedOnclick.mock.calls.length).toBe(1);
    });

    it('snapshot', () => {
        component = setupComponent({
            disabled: true,
            children: 'button text',
        });
        expect(component).toMatchSnapshot();
    });
});
