import React from 'react';
import { shallow } from '../config/enzyme';

import LoadingAnimation from './LoadingAnimation';

describe('<LoadingAnimation />', () => {
  it('Show LoadingAnimation', () => {
    const wrapper = shallow(<LoadingAnimation isLoading={true} />);
    const expected = <div>...loading</div>;

    expect(wrapper.contains(expected)).toBe(true);
  });

  it('Hide LoadAnimation', () => {
    const wrapper = shallow(<LoadingAnimation isLoading={false} />);
    expect(wrapper).toBeNull;
  });
});