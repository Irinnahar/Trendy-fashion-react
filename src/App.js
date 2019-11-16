import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import Shop from './pages/shop/shop.component';
import './App.scss';
import Header from './components/header/header.component';

function App() {
  return (

    <div>
      <Header />
      <switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shop} />
      </switch>

    </div>
  );
}

export default App;
