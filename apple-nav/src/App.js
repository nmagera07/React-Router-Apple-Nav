import React from 'react';
import NavWrapper from './components/NavWrapper'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import MacBook from './components/MacBook'
import Ipad from './components/Ipad'
import Iphone from './components/Iphone'
import Watch from './components/Watch'
import Tv from './components/Tv'
import Music from './components/Music'
import './App.css';

function App() {
  return (
    <div>
      <Router>
       
        <Route path="/" component={NavWrapper} />
        <Route path="/mac" component={MacBook} />
        <Route path="/iPad" component={Ipad} />
        <Route path="/iPhone" component={Iphone} />
        <Route path="/watch" component={Watch} />
        <Route path="/tv" component={Tv} />
        <Route path="/music" component={Music} />
      </Router>
    </div>
  );
}

export default App;
