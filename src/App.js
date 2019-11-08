import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";

import './App.scss';

const HatsPage = () => {
  return <h1>Hats Page</h1>
}
function App() {
  return (

    <div>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/shop/hats" component={HatsPage} />
      <Route exact path="shop/jackets" component={HatsPage} />
      <Route exact path="/shop/sneakers" component={HatsPage} />
      <Route exact path="/shop/womens" component={HatsPage} />
      <Route exact path="/shop/mens" component={HatsPage} />
    </div>
  );
}

export default App;
