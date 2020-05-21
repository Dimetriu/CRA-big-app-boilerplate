import React from 'react';
import Router from '../router';
import { routes } from './App-routes';

export default function App() {
  return (
    <Router routes={routes} />
  );
}
