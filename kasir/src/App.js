import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { NavbarComponent } from './components'
import { Home, Sukses } from './pages'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavbarComponent />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/sukses" component={Sukses} />
          </Switch>
        </main>
      </BrowserRouter>
    )
  }
}
