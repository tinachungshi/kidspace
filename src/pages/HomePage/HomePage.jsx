import React, { Component } from 'react';
import toyAPI from '../../utils/toyAPI';
import ToyView from '../../components/ToyView/ToyView';


class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toys: []
    };
  }

  componentDidMount() {
    toyAPI.index().then(toys => {
      this.setState({ toys });
    });
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


render() {
  return (
    <div className="container">

      <ToyView
        toys={this.state.toys}
        handleAddToy={this.addToyToWishlist}
        getIdDeleteRequest={this.getIdDeleteRequest}
      />

    </div>
  );
}
}

export default HomePage;
