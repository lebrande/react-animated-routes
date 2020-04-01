import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Panda from './pages/Panda';
import Cat from './pages/Cat';
import Horse from './pages/Horse';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <div className="App__viewport">
          <Switch>
            <Route
              exact
              path="/"
              component={Panda}
            />
            <Route
              exact
              path="/cat"
              component={Cat}
            />
            <Route
              exact
              path="/horse"
              component={Horse}
            />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
