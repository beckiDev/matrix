import React from 'react';
import { Route } from 'react-router';
import App from './App';
import Table from './components/Table'
import TableEvent from './components/TableEvent'

export default (
  <Route path="/" component={App}>
    <Route path="/events" component={Table} />
    <Route path="/events/:id" component={TableEvent}> 
    </Route>
  </Route>
);
