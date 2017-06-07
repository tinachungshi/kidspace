import React, { Component } from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import userService from './utils/userService';
import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage';
import HomePage from './pages/HomePage/HomePage';
import WishlistPage from './pages/WishlistPage/WishlistPage';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = Object.assign(
      {}
    );
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
              <Header />
              <NavBar
                user={this.state.user}
                handleLogout={this.handleLogout}
              />
                <Switch>
                  <Route exact path='/' render={(props) =>
                    <HomePage
                      user={this.state.user}
                      handleLogout={this.handleLogout}
                      {...props}
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
                  <Route exact path='/wishlist' render={(props) =>
                    <WishlistPage
                      user={userService.getUser()}
                    />
                  }/>
                </Switch>
              <footer className='header-footer'>This is the footer</footer>
            </div>
          );
        }
      }



export default App;
