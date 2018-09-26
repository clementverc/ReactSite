import React, { Component } from "react";
 
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
 
export default Menu;