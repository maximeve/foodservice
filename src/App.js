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
import Cart from './screens/Cart';
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
            <Route path="/cart" exact>
              <Cart />
            </Route>
            <Route path="/restaurant/:id" >
              <RestaurantDetail />
            </Route>
          </Switch>
      </Router>
    </div>
    </React.Fragment>
  );
}

export default App;
