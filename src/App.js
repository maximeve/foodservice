import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './screens/Home';
import RestaurantDetail from './screens/RestaurantDetail';
import CartPage from './screens/CartPage';
import AccountPage from './screens/AccountPage';
import ServicesPage from './screens/ServicesPage';
import ContactPage from './screens/ContactPage';

function App() {

  return (
    <React.Fragment>
    <div className="App">
      <Router>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/services" exact>
              <ServicesPage />
            </Route>
            <Route path="/contact" exact>
              <ContactPage />
            </Route>
            <Route path="/restaurant/:id" >
              <RestaurantDetail />
            </Route>
            <Route path="/cart" >
              <CartPage />
            </Route>
            <Route path="/account" >
              <AccountPage />
            </Route>
          </Switch>
      </Router>
    </div>
    </React.Fragment>
  );
}

export default App;
