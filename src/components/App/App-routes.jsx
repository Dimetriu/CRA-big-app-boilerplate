import React from 'react';
import { Redirect } from 'react-router-dom';
import { PATHS } from '../../constants';

import Dashboard from '../Dashboard';
import Auth from '../Auth';

export const routes = [
  {
    exact: true,
    path: PATHS.ROOT,
    component: <Dashboard />,
  },
  {
    path: PATHS.DASHBOARD.ROOT,
    component: <Dashboard />,
  },
  {
    path: PATHS.AUTH,
    component: <Auth />,
  },
  {
    path: PATHS.NOT_FOUND,
    component: <p>not found 404 :(</p>,
  },
  {
    path: PATHS.ALL,
    component: <Redirect to="/not-found-404" />,
  },
];
