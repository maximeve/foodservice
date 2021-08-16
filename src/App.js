import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './screens/Home'
import RestaurantDetail from './screens/RestaurantDetail'

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/restaurant/:id" >
              <RestaurantDetail />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
