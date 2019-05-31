import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from "./pages/Home"

const Routing = () => (
     <Router>
        <Switch>
              <Route exact path='/' component={Home} />
              {/* <Route path='/contact' component={Contact} />
              <Route path='/about' component={About} /> */}
          </Switch>
    </Router>
)
export default Routing