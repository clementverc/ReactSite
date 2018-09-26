import React from 'react'
import ReactDOM from 'react-dom'

import Search from './search'
import Menu from './menu'
import List from './list'
import Footer from './footer'

import './index.scss'

const App = () => (
  //<Search />
  <List />
)

ReactDOM.render(<Menu />, document.getElementById('menu'))
ReactDOM.render(<App />, document.getElementById('app'))
//ReactDOM.render(<List />, document.getElementById('list'))
ReactDOM.render(<Footer />, document.getElementById('footer'))

