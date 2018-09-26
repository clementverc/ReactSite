import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Menu extends Component {
  render() {
    return (
        <nav>
            <ul className="header">
            <li><a href="/">Home</a></li>
            <li><a href="/page1">Page 1</a></li>
            <li><a href="/page2">Page 2</a></li>
          </ul>
        </nav>
    );
  }
}

const BasicRouter = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
    </div>
  </Router>
)

export default Menu;
