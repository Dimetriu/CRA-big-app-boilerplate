import React from 'react';
import { Route, Link } from 'react-router-dom';

export const createRoute = (route) => (
  <Route
    exact={route.exact}
    path={route.path}
    key={route.path}
  >
    {route.component}
  </Route>
);

export const createLink = ({ to, text }) => (
  <Link key={to} to={to}>
    {text}
  </Link>
);
