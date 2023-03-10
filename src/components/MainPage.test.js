import React from 'react';
import { shallow } from 'enzyme';
import MainPage from './MainPage';

let wrapper;
beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false
  };
  wrapper = shallow(<MainPage {...mockProps} />);
});

describe('MainPage', () => {
  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('filters robots correctly', () => {
    const mockProps2 = {
      onRequestRobots: jest.fn(),
      robots: [
        {
          id: 3,
          name: 'John',
          email: 'John@gmail.com'
        }
      ],
      searchField: 'john',
      isPending: false
    };
    const wrapper2 = shallow(<MainPage {...mockProps2} />);
    expect(wrapper.instance().filterRobots()).toEqual([]);
    expect(wrapper2.instance().filterRobots()).toEqual([
      {
        id: 3,
        name: 'John',
        email: 'John@gmail.com'
      }
    ]);
  });
});
