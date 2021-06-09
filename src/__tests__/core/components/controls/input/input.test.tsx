import React from 'react';
import { configure, shallow, ShallowWrapper } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { act } from "react-dom/test-utils";

import { Input, InputProps } from '../../../../../core/components';

configure({
    adapter: new Adapter(),
});

function setupComponent(props: InputProps = {}): ShallowWrapper {
    let component: ShallowWrapper;

    act(() => {
        component = shallow(<Input {...props} />);
    });

    return component!;
}

describe('should input renders well', () => {
    let component: ShallowWrapper;

    afterEach(() => {
        act(() => {
            jest.resetAllMocks();
            component.unmount();
        });
    });

    // TODO: why this is not passed?
    // it('should input can be disabled', () => {
    //     component = setupComponent({ disabled: true });
    //     expect(component.getElement()).toBeDisabled();
    // });

    it('should onChange prop can be called', () => {
        const mockedOnclick = jest.fn();
        component = setupComponent({ onChange: mockedOnclick });

        expect(mockedOnclick).toHaveBeenCalledTimes(0);

        const changeEvent = {
            target: {
                value: 'test value',
            },
        };

        act(() => {
            component.simulate('change', changeEvent);
        });

        expect(mockedOnclick).toHaveBeenCalledTimes(1);
        expect(mockedOnclick).toHaveBeenLastCalledWith(changeEvent);
    });

    it('snapshot', () => {
        component = setupComponent({
            disabled: true,
        });
        expect(component).toMatchSnapshot();
    });
});
