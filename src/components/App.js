import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import '../reset.css';
import Header from './Header/Header';


export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={} />
      </Switch>
    </Router>

  )

}