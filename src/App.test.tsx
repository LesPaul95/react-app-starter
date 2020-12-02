import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './App';

test('should mount App', () => {
  const wrapper = mount(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(wrapper).not.toBeNull();
});
