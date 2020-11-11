import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// pages
import Home from './pages/Home';
import Welcome from './pages/Welcome';
import LoginOrCreateUser from './pages/LoginOrCreateUser';

const App: React.FC<{}> = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/welcome" component={Welcome} />
        <Route exact path="/loginOrCreateUser" component={LoginOrCreateUser} />
      </Switch>
    </Router>
  );
};

export default App;
