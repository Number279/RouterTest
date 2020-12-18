import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/HomePage';
import Menu from './components/MenuPage'
import About from './components/AboutPage'
import NavBarPage from './NavBarPage'


class Routes extends Component{
    render(){
        return(
                <Router>
                    <NavBarPage />
                <div>
                    <hr />
                    <Route name="Home" exact path="/" component={Home} />
                    <Route name="Menu" exact path="/menu" component={Menu} />
                    <Route name="About" exact path="/about" component={About} />
                <hr />
                </div>
                </Router>
        )
    }
}

export default Routes;