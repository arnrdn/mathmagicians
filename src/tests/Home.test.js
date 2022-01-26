import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../components/Home';

it('Match the Home component snapshot', () => {
  const tree = renderer.create(<Home />).toJSON();

  expect(tree).toMatchSnapshot();
});
