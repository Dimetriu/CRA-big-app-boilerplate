import React from 'react';
import { Router as R, Switch } from 'react-router-dom';
import * as ROUTES from '../../constants';
import * as RouteUtils from '../../utils';

export const Router = ({ routes }) => (
  <R history={ROUTES.HISTORY}>
    <Switch>
      {routes.map((route) => RouteUtils.createRoute(route))}
    </Switch>
  </R>
);
