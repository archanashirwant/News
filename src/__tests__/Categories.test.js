import React from 'react';
import { shallow, mount } from 'enzyme';
import NewsCategories from '../components/NewsCategories';
import CategoryList from '../components/CategoryList';
/*import context from '../__mocks__/Helper';
jest.mock('../__mocks__/Provider');



test('function called on click', () => {
    const component = mount(<NewsCategories />);
    component.find('div').simulate('click');
    expect(context.updateCategory.mock.calls.length).toBe(1);
  });
*/
/*
it('should update the count by 1 when invoked by default', () => {
  const wrapper = shallow(<NewsCategories />);
  wrapper.find('button').simulate('click');
  expect(wrapper.state('counter')).toBe(1);
});


import playAudio from "utils/audio/playAudio"
jest.mock("utils/audio/playAudio", () => jest.fn())

import { NewsContext } from "../NewsContext";

import * as CounterHook from './counter-hook';

jest.mock('./counter-hook');

it('Calls counter increment when clicking +1', () => {
  const incrementMock = jest.fn();
  const mockedCounterHook = CounterHook as jest.Mocked<typeof CounterHook>;
  mockedCounterHook.useCounter.mockImplementation(() => {
    return {
      value: 0,
      increment: incrementMock
    }
  });
  const wrapper = shallow(<Counter />);

  wrapper.find('.increment-btn').simulate('click')
  expect(incrementMock).toBeCalled();
})




import { shallow } from "./enzyme";

test("enzyme dive", () => {
    const TestComponent = () => (
        <NewsContext.Provider value="science">
            <MyComponent />
        </NewsContext.Provider>
    );
    const element = shallow(<TestComponent />);
    expect(element.find(MyComponent).dive().text()).toBe("Provided Value");
});







  it('should render without throwing an error', function() {
    expect(shallow(<NewsCategories />).contains(div)).toBe(true);
  });



it('Check the onClick event of Category list', () => {

    const onClick = jest.fn();
    const CategoryListComponent = mount(<NewsCategories />);
    const item = CategoryListComponent.find('.science');
    item.simulate('click');
    expect(onClick).toBeCalledWith('science');

    
})

it('has category-group class', () => {
    const wrapper = shallow(<CategoryList />);
    expect(wrapper.find('.science')).toEqual(true);
});*/



describe('Click calls the updateCategory function', () => {
  it('Test click event', () => {
    const mockCallBack = jest.fn();

    const wrapper = shallow(<CategoryList />);    
    
    wrapper.find('.science').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
