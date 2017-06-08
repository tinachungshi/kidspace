import React, { Component } from 'react';
import Toy from '../../components/Toy/Toy';
import toyAPI from '../../utils/toyAPI';
import './ToyView.css';

class ToyView extends Component {

  addToyToWishlist = (toyIdx) => {
    toyAPI.addToy(this.props.toys[toyIdx]).then(cart => {

      this.props.history.push('/wishlist');
    });
  }

  componentDidMount() {
    toyAPI.index().then(toys => {
      this.props.updateToys(toys);
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.props.toys.map((toy, i) => {
            return (
              <div className="thumbnails" key={i}>
                <Toy
                  toy={toy}
                  idx={i}
                  addToyToWishlist={this.addToyToWishlist}
                />
              </div>
            );
          })}
        </div>
      </div>
    )
  }
}

export default ToyView;
