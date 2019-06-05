import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home';
import Werk from './components/Werk';
import Skills from './components/Skills';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/werk" component={Werk} />
        <Route path="/skills" component={Skills} />
      </Switch>
    </div>
  );
}

export default App;
