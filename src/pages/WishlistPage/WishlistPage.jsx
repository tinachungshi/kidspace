import React, {Component} from 'react';
import toyAPI from '../../utils/toyAPI';
import Toy from '../../components/Toy/Toy';

class WishlistPage extends Component {
  constructor() {
    super();
    this.state = {
      wishlist: []
    }
  }

  componentDidMount() {
    toyAPI.getCart().then(wishlist => this.setState({wishlist: wishlist}));
  }

  removeToyFromWishlist = (toyId) => {
    this.props.removeToyFromWishlist(toyId)
    .then(wishlist => this.setState({wishlist: wishlist}))
  }

  render() {
    return (
      <div className="container" >
        {this.state.wishlist.map(toy =>
          <Toy
            key={toy.ebayId}
            toy={toy}
            removeToyFromWishlist={this.removeToyFromWishlist}
          />
        )}
      </div>
    );
  }

}

export default WishlistPage;
