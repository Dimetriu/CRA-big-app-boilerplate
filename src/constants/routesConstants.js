import { createBrowserHistory } from 'history';

export const HISTORY = createBrowserHistory();

export const PATHS = {
  ROOT: '/',
  DASHBOARD: {
    ROOT: '/dashboard',
    REPORTS: '/dashboard/reports',
    ORDERS: '/dashboard/orders',
    KEYWORD_INTELLIGENCE: '/dashboard/keyword-intelligence',
    CUSTOMERS: '/dashboard/customers',
  },
  AUTH: '/auth',
  NOT_FOUND: '/not-found-404',
  ALL: '*',
};

export const LINKS = {
  DASHBOARD: [
    {
      to: PATHS.DASHBOARD.REPORTS,
      text: 'reports',
    },
    {
      to: PATHS.DASHBOARD.ORDERS,
      text: 'orders',
    },
    {
      to: PATHS.DASHBOARD.KEYWORD_INTELLIGENCE,
      text: 'keyword intelligence',
    },
    {
      to: PATHS.DASHBOARD.CUSTOMERS,
      text: 'customers',
    },
  ],
};
