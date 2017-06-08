import React, { Component } from 'react';
import toyAPI from '../../utils/toyAPI';


class ToyView extends Component {

  componentDidMount() {
    console.log(this.props)
    toyAPI.index().then(toys => {
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
                        <button className="btn btn-primary btn-block" onClick={() => this.props.handleAddToy(i)}>Add to wishlist</button>
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
