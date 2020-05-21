import React, { useEffect } from 'react';
import {
  useLocation,
  useHistory,
} from 'react-router-dom';
import { PATHS } from '../../constants';
import { DashBoardUI } from './Dashboard-ui';

export const Dashboard = () => {
  const { pathname } = useLocation();
  const history = useHistory();

  const paths = new Set([
    PATHS.ROOT,
    PATHS.DASHBOARD.ROOT,
  ]);

  useEffect(() => {
    if (paths.has(pathname)) {
      return history.push(PATHS.DASHBOARD.REPORTS);
    }
  }, [pathname, history, paths]);

  return <DashBoardUI />;
};
