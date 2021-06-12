import './App.scss';
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Posts from './component/Posts';
import Add from './component/Add';
import Nav from './component/Nav';
import Details from './component/Details';



const App = () => {

  return (
    <BrowserRouter>

      <Nav />
      <Switch>
        <Route exact path="/" component={Posts} />
        <Route path="/add" component={Add} />
        <Route path="/posts/:id" component={Details} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
