import 'react-native';
import React from 'react';
import App from '../App.jsx';

// Note: test renderer must be required after react-native.
import renderer, { act } from 'react-test-renderer';
// beforeEach(() => {
//   jest.useFakeTimers();
// });

it('renders correctly', async () => {
  const tree = renderer.create(<App />).toJSON();
  // expect(tree).toMatchSnapshot();
  // renderer.create(<App />);
  await act(() => expect(tree).toMatchSnapshot());
});
