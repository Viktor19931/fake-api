import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./pages/Home"
import PostView from "./pages/PostPreview"

const Routing = () => (
     <Router>
        <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/details' component={PostView} />
          </Switch>
    </Router>
)
export default Routing