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
import ToyView from './components/ToyView/ToyView';


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

  updateToys(toys) {
    this.setState({ toys });
  }

  addToyToWishlist = (toyIdx) => {
    var toy = this.state.toys[toyIdx];
    toy = JSON.stringify(toy);
    toy = toy.replace(/[\uE000-\uF8FF]/g, '');
    toy = JSON.parse(toy);
    toyAPI.addToy(toy).then(() => {
      this.props.history.push('/wishlist');
    });
  }

  getIdDeleteRequest = (toyIdx) => {
    var toy = this.state.toys[toyIdx];
    toy = JSON.stringifyi(toy);
    toyAPI.deleteToy(toy);
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
              handleAddToy={this.addToyToWishlist}
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
              getIdDeleteRequest={this.getIdDeleteRequest}
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
