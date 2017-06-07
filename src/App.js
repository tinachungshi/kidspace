import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
  // Redirect
} from 'react-router-dom';
import './App.css';
import userService from './utils/userService';
import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage';
import HomePage from './pages/HomePage/HomePage';
import NavBar from './components/NavBar/NavBar';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  /*---------- Callback Methods ----------*/

  handleLogout = () => {
    userService.logout();
    this.setState({user: null});
  }

  handleSignup = () => {
    this.setState({user: userService.getUser()});
  }

  handleLogin = () => {
    this.setState({user: userService.getUser()});
  }


  /*---------- Lifecycle Methods ----------*/

  componentDidMount() {
    let user = userService.getUser();
    this.setState({user});
  }

  render() {
    return (
            <div className='container App-container'>
              <header className=''>HEADER</header>
              <NavBar
                user={this.state.user}
                handleLogout={this.handleLogout}
              />
              <Router>
                <Switch>
                  <Route exact path='/' render={() =>
                    <HomePage
                      user={this.state.user}
                      handleLogout={this.handleLogout}
                    />
                  }/>
                  <Route exact path='/signup' render={(props) =>
                    <SignupPage
                      {...props}
                      handleSignup={this.handleSignup}
                    />
                  }/>
                  <Route exact path='/login' render={(props) =>
                    <LoginPage
                      {...props}
                      handleLogin={this.handleLogin}
                    />
                  }/>
                </Switch>
              </Router>
              <footer className='header-footer'>This is the footer</footer>
            </div>
          );
        }
      }



export default App;
