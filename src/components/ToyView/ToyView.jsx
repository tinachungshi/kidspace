import React from 'react';


const ToyView = (props) => {
  return (
    <div>
      {props.toys.map((toy, i) => {
        return (
          <div className="container" key={i}>
            <div className="row">
              <ul className="thumbnails">
                <div className="col-md-4">
                  <div className="thumbnail">
                    <img src={toy.photoUrl} alt="Ebay Photo" className="img-responsive" />
                      <div className="caption">
                        <p><b>{toy.name}</b></p>
                        <p>Link: <a href={toy.link} target="_blank" rel="noopener noreferrer">Ebay Page</a></p>
                        <p>Price: {toy.price}</p>
                        <button className="btn btn-primary btn-block" onClick={() => props.handleAddToy(i)}>Add to wishlist</button>
                      </div>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};





export default ToyView;
