import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import ConcatenateName from './ConcatenateName';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={ConcatenateName} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
