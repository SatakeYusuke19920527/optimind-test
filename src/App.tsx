import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// pages
import Home from './pages/Home';
import Welcome from './pages/Welcome';

const App: React.FC<{}> = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/welcome" component={Welcome} />
      </Switch>
    </Router>
  );
};

export default App;
