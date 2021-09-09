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
import CartModal from './components/CartModal'

function App() {

  const modalState = useSelector((state) => state.cart.modalIsOpen);

  return (
    <React.Fragment>
    { modalState ? <CartModal/> : ''}
    <div className="App">
      <Router>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/restaurant/:id" >
              <RestaurantDetail />
            </Route>
            <Route path="/cart" >
              <CartPage />
            </Route>
          </Switch>
      </Router>
    </div>
    </React.Fragment>
  );
}

export default App;
