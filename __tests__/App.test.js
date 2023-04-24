import 'react-native';
import React from 'react';
import App from '../App.jsx';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
// beforeEach(() => {
//   jest.useFakeTimers();
// });

it('renders correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
  // renderer.create(<App />);
});
