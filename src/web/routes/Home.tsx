import React, { FC, useState, useEffect } from 'react';
import { Route, Switch, RouteProps } from 'react-router-dom';

import Card from '@skatteetaten/frontend-components/Card';

import { SkeLink } from '../components/SkeLink';
import './Home.css';

type HomeProps = RouteProps;

export const Home: FC<HomeProps> = ({ location }) => {
  const [serverMessage, setServerMessage] = useState('');

  useEffect(() => {
    setServerMessage('Hello');
  }, []);

  const serverLink =
    location?.pathname === '/' ? (
      <SkeLink key="server" to="/message">
        Show server message
      </SkeLink>
    ) : (
      <SkeLink key="hide" to="/">
        Hide server message
      </SkeLink>
    );

  return (
    <div>
      <div className="center">{serverLink}</div>
      <Switch>
        <Route path="/message">
          <Card role="server-message">{serverMessage}</Card>
        </Route>
      </Switch>
    </div>
  );
};
