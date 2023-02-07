/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../src/Router';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import Router from '../src/Router';

it('renders correctly', () => {
  renderer.create(<Router />);
});
