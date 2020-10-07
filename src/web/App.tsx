import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Layout } from './components/Layout';
import { Home } from './routes/Home';

export default () => (
  <BrowserRouter>
    <Layout title="Documentation template" footer="2020">
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Layout>
  </BrowserRouter>
);
