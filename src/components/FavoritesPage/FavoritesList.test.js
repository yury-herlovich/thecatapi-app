import React from 'react';
import { shallow } from '../../config/enzyme';

import FavoritesList from './FavoritesList';

describe('<FavoritesList />', () => {
  it('Render list of images', () => {
    const props = {
      images: [
        {
          id: '1a',
          url: 'test.jpg',
        },
        {
          id: '2b',
          url: 'test.jpg',
        }
      ],
      removeFavorite: jest.fn()
    };

    const wrapper = shallow(<FavoritesList {...props}/>);
    expect(wrapper.find('.image-container').length).toBe(2);
  });

  it('Render empty component', () => {
    const props = {
      images: [],
      removeFavorite: jest.fn()
    };

    const wrapper = shallow(<FavoritesList {...props}/>);
    expect(wrapper.find('.image-container').length).toBe(0);
  });
});