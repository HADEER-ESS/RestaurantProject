import React from 'react';
import Header from '../src/Components/Header';
import renderer from 'react-test-renderer';

it('Test If The Component Render Correctly Across Screen', () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});
