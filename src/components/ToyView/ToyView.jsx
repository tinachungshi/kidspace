import React, { Component } from 'react';
import toyAPI from '../../utils/toyAPI';


class ToyView extends Component {

  addToyToWishlist = (toyIdx) => {
    var toy = this.props.toys[toyIdx];
    toy = JSON.stringify(toy);
    toy = toy.replace(/[\uE000-\uF8FF]/g, '');
    toy = JSON.parse(toy);
    toyAPI.addToy(toy).then(() => {
      this.props.history.push('/wishlist');
    });
  }

  componentDidMount() {
    toyAPI.index().then(toys => {
      console.log('this is toys', toys)
      this.props.updateToys(toys);
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            {this.props.toys.map((toy, i) => {
              return (
                <ul className="thumbnails" key={i}>
                  <div className="col-md-6">
                    <div className="thumbnail">
                      <img src={toy.photoUrl} alt="Ebay" className="img-responsive" />
                      <div className="caption">
                        <p><b>{toy.name}</b></p>
                        <p>Link: <a href={toy.link} target="_blank" rel="noopener noreferrer">Ebay Page</a></p>
                        <p>Price: {toy.price}</p>
                        <button className="btn btn-primary btn-block" onClick={() => this.addToyToWishlist(i)}>Add to wishlist</button>
                      </div>
                    </div>
                  </div>
                </ul>
              );
            })}
          </div>
        </div>
      </div>
    )
  }
}


/*

const ToyView = (props) => {
  return (
    <div>
      <div className="container">
        <div className="row">
          {props.toys.map((toy, i) => {
            return (
              <ul className="thumbnails" key={i}>
                <div className="col-md-6">
                  <div className="thumbnail">
                    <img src={toy.photoUrl} alt="Ebay" className="img-responsive" />
                    <div className="caption">
                      <p><b>{toy.name}</b></p>
                      <p>Link: <a href={toy.link} target="_blank" rel="noopener noreferrer">Ebay Page</a></p>
                      <p>Price: {toy.price}</p>
                      <button className="btn btn-primary btn-block" onClick={() => props.handleAddToy(i)}>Add to wishlist</button>
                    </div>
                  </div>
                </div>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
};


*/


export default ToyView;
