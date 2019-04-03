import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage.js';
import AdoptionPage from './pages/AdoptionPage.js';
import AdoptionsPage from './pages/AdoptionsPage.js';
import CatPage from './pages/CatPage.js';
import CatsPage from './pages/CatsPage.js';
import ProjectPage from './pages/ProjectPage.js';
import ProjectsPage from './pages/ProjectsPage.js';
import AppNav from './components/AppNav/AppNav';
import LoginPage from './pages/LoginPage';
import AddProjectPage from './pages/AddProjectPage';



class App extends Component {
  state = {
    user: null
  }
  _handleLogin(user) {
    this.setState({
      user: user
    })
  }
  

  render() {
    const renderLoginPage = (props) => {
      return(
        <LoginPage 
          history={props.history}
          _handleLogin={(user) => this._handleLogin(user)} />
      )
    }  
    const renderAddProjectPage = (props) => {
      return(
        <AddProjectPage
          history={props.history}
          user={this.state.user}
          />
      )
    }
    
    const renderLogout = (props) => {
      this.setState({user: null})
      return <Redirect to={'/login'} />
    }

    return (
      <div>
        <BrowserRouter>
          <AppNav user={this.state.user} />
          <div>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/adoptions" component={AdoptionsPage} />
            <Route exact path="/adoptions/:adoptionID" component={AdoptionPage} />
            <Route exact path="/cats" component={CatsPage} />
            <Route exact path="/cats/:catID" component={CatPage} />
            <Route exact path="/projects/" component={ProjectsPage} />
            <Route exact path="/projects/:projectID" component={ProjectPage} />
            <Route exact path="/add-project" render={renderAddProjectPage} />
            <Route exact path="/login" render={renderLoginPage} />
            <Route exact path="/logout" render={renderLogout} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;