import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";

import Shop from './pages/shop/shop.component';
import Auth from './pages/auth/auth.component';
import Homepage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';

import './App.scss';

function App() {
  return (
    <div>
      <Header />
      <switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/registration" component={Auth} />
      </switch>
    </div>
  );
}

export default App;
