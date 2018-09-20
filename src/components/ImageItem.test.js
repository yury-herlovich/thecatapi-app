import React from 'react';
import { shallow } from '../enzyme';

import ImageItem from './ImageItem';

describe('<ImageItem />', () => {
  it('Render Image', () => {
    const url = 'http://test.test/test.jpg';
    const wrapper = shallow(<ImageItem url={url} />);
    const expected = <div className="image-item"><img src={url} alt="" /></div>;

    expect(wrapper.contains(expected)).toBe(true);
  });

  it('Render Image not found', () => {
    const wrapper = shallow(<ImageItem />);
    const expected = <div className="image-item">Image not found</div>;

    expect(wrapper.contains(expected)).toBe(true);
  });
});