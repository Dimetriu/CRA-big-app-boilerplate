import React from 'react';
import { Switch } from 'react-router-dom';
import { dashboardRoutes } from './Dashboard-routes';
import { LINKS } from '../../constants';
import * as RouteUtils from '../../utils';

const renderLinks = () => (
  <nav>
    {LINKS.DASHBOARD.map((l) => RouteUtils.createLink(l))}
  </nav>
);

const renderRoutes = () => (
  <Switch>
    {dashboardRoutes.map((r) => RouteUtils.createRoute(r))}
  </Switch>
);

export const DashBoardUI = () => (
  <>
    <header>Dashboard Header</header>
    {renderLinks()}
    {renderRoutes()}
    <footer>Dashboard Footer</footer>
  </>
);
