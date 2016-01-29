import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import App from './components/App'
import Games from './components/Games'
import Details from './components/Details'

const history = createBrowserHistory()
let routes = (
  <Router history={history}>
    <Route path='/' component={App}>
      <IndexRoute component={Games}/>
      <Route path='details' component={Details}/>
    </Route>
  </Router>
)

ReactDOM.render(routes, document.getElementById('app'))
