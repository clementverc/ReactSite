import React from 'react'
import ReactDOM from 'react-dom'

import Search from './search'
import Menu from './menu'
import List from './list'
import Footer from './footer'

import './index.scss'
const list = [{
  name: 'Cyril',
  age: 31
}, {
  name: 'Echo',
  age: 24
}, {
  name: 'Guillaume',
  age: 12
}]
const App = () => (
  <Search />
)

ReactDOM.render(<Menu />, document.getElementById('menu'))
ReactDOM.render(<App />, document.getElementById('app'))
ReactDOM.render(<Footer />, document.getElementById('footer'))

