import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import Shop from './pages/shop/shop.component';

import './App.scss';

const HatsPage = () => {
  return <h1>Hats Page</h1>
}
function App() {
  return (

    <div>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/shop" component={Shop} />

    </div>
  );
}

export default App;
