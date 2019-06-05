import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home';
import Werk from './components/Werk';
import Skills from './components/Skills';
import Navigation from './components/Navigation';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
 
function App() {
  return (
    <div className="App">
      <Navigation/>
      <Route render={({location}) => (
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={3000}
            classNames="fade"
          >
            <Switch location={location}>
              <Route exact path="/" component={Home}/>
              <Route path="/werk" component={Werk} />
              <Route path="/skills" component={Skills} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )} />
    </div>
  );
}

export default App;
