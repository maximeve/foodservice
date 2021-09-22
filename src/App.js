import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useSelector } from "react-redux";

import Home from './screens/Home';
import RestaurantDetail from './screens/RestaurantDetail';
import CartPage from './screens/CartPage';
import AccountPage from './screens/AccountPage';
import ServicesPage from './screens/ServicesPage';
import ContactPage from './screens/ContactPage';
import Footer from './components/Footer';

function App() {

  const modalState = useSelector((state) => state.cart.modalIsOpen);

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
      <Footer />
    </div>
    </React.Fragment>
  );
}

export default App;
