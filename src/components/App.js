import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import '../reset.css';
import Header from './Header/Header';
import QuoteContainer from '../containers/QuoteContainer';


export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={QuoteContainer} />
      </Switch>
    </Router>

  );
}
