import React from 'react';
import { shallow } from '../../config/enzyme';

import ImageList from './ImageList';

describe('<ImageList />', () => {
  it('Render list of images', () => {
    const props = {
      images: [
        {
          id: '1a',
          url: 'test.jpg',
          isFavorite: false
        },
        {
          id: '2b',
          url: 'test.jpg',
          isFavorite: false
        }
      ],
      addToFavorites: jest.fn()
    };

    const wrapper = shallow(<ImageList {...props}/>);
    expect(wrapper.find('.image-container').length).toBe(2);
  });

  it('Render empty component', () => {
    const props = {
      images: [],
      addToFavorites: jest.fn()
    };

    const wrapper = shallow(<ImageList {...props}/>);
    expect(wrapper.find('.image-container').length).toBe(0);
  });
});