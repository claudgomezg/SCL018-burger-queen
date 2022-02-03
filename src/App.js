import './components.css';
import React, { Fragment } from 'react'
import WaitressView from './components/waitress.jsx'
import Home from './components/home.jsx'
import KitchenView from './components/kitchen.jsx'
import DeliverOrders from './components/deliverorders.jsx'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

const App = () => {
  return (
    <Fragment>
      <Router>

        <Switch>
          <Route exact path="/">
          <Home></Home>
          </Route>
           
          <Route path="/waitress">
          <WaitressView></WaitressView>
          </Route>

          <Route path="/kitchen">
          <KitchenView></KitchenView>
          </Route>

          <Route path="/deliverorders">
          <DeliverOrders></DeliverOrders>
          </Route>

        </Switch>

      </Router>
    </Fragment>
  );
}

export default App;
