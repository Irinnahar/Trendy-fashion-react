import React from 'react';
import { Switch, Route } from "react-router-dom";

import Shop from './pages/shop/shop.component';
import Auth from './pages/auth/auth.component';
import Homepage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';

import './App.scss';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/registration" component={Auth} />
      </Switch>
    </div>
  );
}

export default App;
