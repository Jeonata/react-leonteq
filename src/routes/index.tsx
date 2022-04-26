import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import { Books } from '../pages/Books';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Books} />
  </Switch>
);

export default Routes;
