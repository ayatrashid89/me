import React from 'react';
import {
    shallow
} from 'enzyme';
import Education from './education';

it('test the education part', () => {

    const wrapper = shallow( < Education / > );
    const span = wrapper.find("h5");
    const result = span.text();

    expect(result).toBe('GPA');

});