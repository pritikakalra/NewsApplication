import 'file?name=[name].[ext]!../index.html';

import React from 'react';
import ReactDOM from 'react-dom';
var {browserHistory, hashHistory, Route, Router, IndexRoute}
  = require('react-router');

import About from './components/About.jsx';
import HomeComponent from './components/HomeComponent.jsx';
import Contact from './components/Contact.jsx';
import NavBar from './components/NavBar.jsx';
import FavouriteNews from './components/FavouriteNews.jsx';
import Login from './components/Login.jsx';

class MainComponent extends React.Component{

render(){

return (
<div>
<NavBar/>
  <br/><br/><br/><br/>
    {this.props.children}
</div>
)
}
}
ReactDOM.render(
<Router history={hashHistory}>
             <Route path="/" components={MainComponent} >
             <Route path="/homeComponent" components={HomeComponent}/>
             <Route path="/favouriteNews" components={FavouriteNews}/>
             <Route path="/about" components={About}/>
             <Route path="/contact" components={Contact}/>
             <Route path="/Login" components={Login}/>
             <Route path="/NavBar" components={NavBar}/>
</Route>
</Router>,document.getElementById('content'));
