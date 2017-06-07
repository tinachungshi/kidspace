import React from 'react';

const WishlistPage = (props) => {

  return(
    <div>
      <h1>Wishlist</h1>
      <p>{JSON.stringify(props.user.wishlist)}</p>
    </div>

  );

}

export default WishlistPage;
