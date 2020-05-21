import React from 'react';
import { Redirect } from 'react-router-dom';
import { PATHS } from '../../constants';

import { Reports } from './Reports';
import { Orders } from './Orders';
import { KeywordIntelligence } from './KeywordIntelligence';
import { Customers } from './Customers';

export const dashboardRoutes = [
  {
    exact: true,
    path: PATHS.DASHBOARD.REPORTS,
    component: <Reports />,
  },
  {
    exact: true,
    path: PATHS.DASHBOARD.ORDERS,
    component: <Orders />,
  },
  {
    exact: true,
    path: PATHS.DASHBOARD.KEYWORD_INTELLIGENCE,
    component: <KeywordIntelligence />,
  },
  {
    exact: true,
    path: PATHS.DASHBOARD.CUSTOMERS,
    component: <Customers />,
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
