import React from 'react';
import { TextField } from 'components';
import { shallow } from 'enzyme';

test('Renders correct label', () => {
  const wrapper = shallow(<TextField label="Test" />);
  expect(wrapper.find('label').text()).toEqual('Test');
});

test('Renders error', () => {
  const wrapper = shallow(<TextField error="Test Error" />);
  const errorClassName = 'errorContainer';
  expect(wrapper.find('.container').hasClass('error')).toEqual(true);
  expect(wrapper.find(`.${errorClassName}`).text()).toEqual('Test Error');
});


test('Input type is correct', () => {
  let wrapper = shallow(<TextField />);
  expect(wrapper.find('input').prop('type')).toEqual('text');

  wrapper = shallow(<TextField type="password" />);
  expect(wrapper.find('input').prop('type')).toEqual('password');
});
