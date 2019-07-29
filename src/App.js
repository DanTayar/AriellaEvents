import React from 'react';
import './App.css';

import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom';

import Navbar from './navbar.js';
import Footer from './footer.js';
import Mainpage from './mainpage.js';
import Gallery from './gallery.js';
import TravelAgency from './travelagency.js';

class App extends React.Component{
  render (){
    return (
    <div className='app'>
      <Router>
      <Navbar/>
      <Switch>
        <Route exact path='/gallery' component={Gallery} />
        <Route exact path='/travelagency' component={TravelAgency} />
        <Route exact path='/home' component={Mainpage} />
        <Redirect from = '/' to='/home' />
        
      </Switch>
      </Router>
      <div>   
        <Footer/>
      </div>
    </div>
    )
  }
}

export default App;
