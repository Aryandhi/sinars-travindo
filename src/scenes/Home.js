import React, {Fragment} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Homepage from './Homepage';
import FormOrder from './FormOrderpage';
import Checkoutpage from './Checkoutpage';

export default function Home() {
  return (
    <Router>
        {/* component global */}
        
        {/* End component global */}
        <Route path="/" exact component={Homepage}/>
        <Route path="/formOrder" exact component={FormOrder}/>
        <Route path="/checkout" component={Checkoutpage}/>
    </Router>
  )
}
