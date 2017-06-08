import React, { Component } from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
// import './App.css';
import toyAPI from './utils/toyAPI';
import userService from './utils/userService';
import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage';
import AboutPage from './pages/AboutPage/AboutPage';
import WishlistPage from './pages/WishlistPage/WishlistPage';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import ToyView from './pages/ToyView/ToyView';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toys: []
    };
  }

  /*---------- Callback Methods ----------*/

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignup = () => {
    this.setState({ user: userService.getUser() });
  }

  handleLogin = () => {
    this.setState({ user: userService.getUser() });
  }

  updateToys = (toys) => {
    this.setState({toys: toys});
  }

  removeToyFromWishlist = (toyId) => {
    return toyAPI.deleteToy(toyId);
  }

  /*---------- Lifecycle Methods ----------*/

  componentDidMount() {
    let user = userService.getUser();
    this.setState({ user });
  }

  render() {
    return (

      <div className='container'>

        <Header />
        <NavBar
          user={this.state.user}
          handleLogout={this.handleLogout}
        />

        <Switch>
          <Route exact path='/' render={(props) =>
            <ToyView
              user={this.state.user}
              handleLogout={this.handleLogout}
              toys={this.state.toys}
              updateToys={this.updateToys}
              {...props}
            />
          } />
          <Route exact path='/signup' render={(props) =>
            <SignupPage
              {...props}
              handleSignup={this.handleSignup}
            />
          } />
          <Route exact path='/login' render={(props) =>
            <LoginPage
              {...props}
              handleLogin={this.handleLogin}
            />
          } />
          <Route exact path='/wishlist' render={(props) =>
            <WishlistPage
              user={userService.getUser()}
              removeToyFromWishlist={this.removeToyFromWishlist}
            />
          } />
          <Route exact path='/about' render={(props) =>
            <AboutPage
              user={userService.getUser()}
            />
          } />

        </Switch>
      </div>
    );
  }
}



export default App;
