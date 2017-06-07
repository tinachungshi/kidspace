import React, {Component} from 'react';
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
      this.setState({toys});
    });
  }

  addToyToWishlist = (toyIdx) => {
    toyAPI.addToy(this.state.toys[toyIdx]).then(() => {
      this.props.history.push('/wishlist');
    });
  }

  render() {
    return (
      <div className="container">

        <h1>TOYS</h1>

        <ToyView
          toys={this.state.toys}
          handleAddToy={this.addToyToWishlist}
        />

      </div>
    );
  }
}

export default HomePage;
