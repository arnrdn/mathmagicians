import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';

it('Match the Calculator component snapshot', () => {
  const tree = renderer.create(<Calculator />).toJSON();

  expect(tree).toMatchSnapshot();
});
