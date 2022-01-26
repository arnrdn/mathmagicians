import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../components/Footer';

it('Match the Footer component snapshot', () => {
  const tree = renderer.create(<Footer />).toJSON();

  expect(tree).toMatchSnapshot();
});
