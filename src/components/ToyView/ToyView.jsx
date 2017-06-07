import React from 'react';

const ToyView = (props) => {
  return (
    <div>
      {props.toys.map((toy, i) => {
        return (
          <div key={i} className="row">
            <div className="col-sm-4 col-md-4">
              <div className="thumbnail">
                <img src={toy.photoUrl} alt="Ebay" />
              </div>
              <div className="caption">
                <p><b>{toy.name}</b></p>
                <p>Link: <a href={toy.link} target="_blank" rel="noopener noreferrer">Ebay Page</a></p>
                <p>Price: {toy.price}</p>

                <button onClick={() => props.handleAddToy(i)}>Add to wishlist</button>

              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ToyView;
