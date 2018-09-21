import React from 'react';
import { shallow } from '../config/enzyme';

import ButtonRemoveFromFavorites from './ButtonRemoveFromFavorites';

describe('<ButtonRemoveFromFavorites />', () => {
  it('Render Link', () => {
    const onClick = jest.fn();
    const wrapper = shallow(<ButtonRemoveFromFavorites onClick={onClick} />);
    const expected = <a href="" onClick={onClick}>Remove from Favorites</a>;

    expect(wrapper.contains(expected)).toBe(true);
  });

  it('Click must call a function', () => {
      const onClick = jest.fn();
      const wrapper = shallow(<ButtonRemoveFromFavorites onClick={onClick} />);

      wrapper.find('a').simulate('click');
      expect(onClick.mock.calls.length).toBe(1);
  });
});