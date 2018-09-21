import React from 'react';
import { shallow } from '../config/enzyme';

import ButtonAddToFavorites from './ButtonAddToFavorites';

describe('<ButtonAddToFavorites />', () => {
  it('Render Link', () => {
    const onClick = jest.fn();
    const isFavorite = false;
    const wrapper = shallow(<ButtonAddToFavorites onClick={onClick} isFavorite={isFavorite} />);
    const expected = <a href="" onClick={onClick}>Add to Favorites</a>;

    expect(wrapper.contains(expected)).toBe(true);
  });

  it('Render Image In Favorites', () => {
    const onClick = jest.fn();
    const isFavorite = true;
    const wrapper = shallow(<ButtonAddToFavorites onClick={onClick} isFavorite={isFavorite} />);

    const expected = 'In Favorites';

    expect(wrapper.contains(expected)).toBe(true);
  });

  it('Click must call a function', () => {
      const onClick = jest.fn();
      const isFavorite = false;
      const wrapper = shallow(<ButtonAddToFavorites onClick={onClick} isFavorite={isFavorite} />);

      wrapper.find('a').simulate('click');
      expect(onClick.mock.calls.length).toBe(1);
  });
});