import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import App from './components/App'
import Games from './components/Games'

let routes = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Games}/>
    </Route>
  </Router>
)

ReactDOM.render(routes, document.getElementById('app'))
