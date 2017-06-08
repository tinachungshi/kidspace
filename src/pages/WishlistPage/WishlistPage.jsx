import React from 'react';

const WishlistPage = (props) => {

  return (
    <div>
      {/*<p>{JSON.stringify(props.user.wishlist)}</p>*/}
      <div>
        <div className="container">
          <div className="row">
            <h1>Wishlist</h1>
            {props.user.wishlist.map((toy, i) => {
              return (
                <ul className="thumbnails" key={i}>
                  <div className="col-md-6">
                    <div className="thumbnail">
                      <img src={toy.photoUrl} alt="Ebay" className="img-responsive" />
                      <div className="caption">
                        <p><b>{toy.name}</b></p>
                        <p>Link: <a href={toy.link} target="_blank" rel="noopener noreferrer">Ebay Page</a></p>
                        <p>Price: {toy.price}</p>
                        {/*<form id="button-delete" action="/pets/<%= pet.id %>?_method=DELETE" method="POST">
                          <button class="btn btn-default" type="submit">DELETE</button>
                        </form><br>*/}
                          {/*<button className="btn btn-primary btn-block" onClick={() => props.handleAddToy(i)}>Delete from wishlist</button>*/}
                      </div>
                      </div>
                    </div>
                </ul>
                  );
            })}
          </div>
        </div>
      </div>

        </div>

        );

}

export default WishlistPage;
