import React from 'react';
import { Button } from 'components';
import { shallow } from 'enzyme';

test('Renders correct text', () => {
  const wrapper = shallow(<Button text="Test" />);
  expect(wrapper.text()).toEqual('Test');
});

test('Renders loading', () => {
  const wrapper = shallow(<Button text="Test" loading />);
  expect(wrapper.find('i').text()).toEqual('loop');
  expect(wrapper.find('i').hasClass('material-icons spin')).toEqual(true);
});


test('onClick handler', () => {
  let onClickCalled = false;
  const wrapper = shallow(<Button
    text="Test"
    onClick={() => {
      onClickCalled = true;
    }}
  />);
  wrapper.simulate('click');
  expect(onClickCalled).toEqual(true);
});
