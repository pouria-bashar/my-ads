import React from 'react';
import { AuthForm } from 'views';
import { shallow } from 'enzyme';
import Login from '../src/views/AuthForm/Login/Login';
import Signup from '../src/views/AuthForm/Signup/Signup';

test('Renders correct tabs', () => {
  const wrapper = shallow(<AuthForm history={{}} />);
  expect(wrapper.find('.tabs button')).toHaveLength(2);
});


test('Sets the correct tab and sets the state correctly', () => {
  const wrapper = shallow(<AuthForm history={{}} />);
  expect(wrapper.state()).toEqual({ showLogin: true });
  const loginButton = wrapper.find('.tabs button').first();
  loginButton.simulate('click');
  // Login form should be displayed
  expect(wrapper.state()).toEqual({ showLogin: true });
  expect(wrapper.find(Login)).toHaveLength(1);
  expect(wrapper.find(Signup)).toHaveLength(0);
  expect(loginButton.hasClass('active')).toEqual(true);
  // Set signup
  const signupButton = wrapper.find('.tabs button').last();
  signupButton.simulate('click');
  expect(wrapper.state()).toEqual({ showLogin: false });
  expect(wrapper.find(Login)).toHaveLength(0);
  expect(wrapper.find(Signup)).toHaveLength(1);
  expect(wrapper.find('.tabs button').last().hasClass('active')).toEqual(true);
});
