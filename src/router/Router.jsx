
import React, { lazy, Suspense } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Home = lazy(() => import('../pages/HomePage'));
const Login = lazy(() => import('../pages/Login'));
const Detail = lazy(() => import('../pages/DetailPage'));

export default function RouterComponent() {
  return (
    <Router>
        <Switch>
          <Suspense fallback={<h1>Cargando</h1>}>
            <Route exact path='/'>
              <Login />
            </Route>
            <Route exact path='/home'>
              <Home />
            </Route>
            <Route exact path='/detail' >
             <Detail />
            </Route>
          </Suspense>
        </Switch>
    </Router>
  );
}