import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';

import Animal from './Animal';
import Menu from './Menu';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <div className="App__viewport">
          <Route
            render={({ location }) => (
              <AnimatePresence>
                <Switch location={location} key={location.pathname}>
                  <Route
                    exact
                    path="/"
                    render={() => <p className="App__title">Animals</p>}
                  />
                  <Route
                    exact
                    path="/animal/:id"
                    component={Animal}
                  />
                </Switch>
              </AnimatePresence>
            )}
          />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
