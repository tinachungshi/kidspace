import React from 'react';

const Toy = (props) => {
	return (
		<div className="col-md-6">
			<div className="thumbnail">
				<img src={props.toy.photoUrl} alt="Ebay" className="img-responsive" />
				<div className="caption">
					<p><b>{props.toy.name}</b></p>
					<p>Link: <a href={props.toy.link} target="_blank" rel="noopener noreferrer">Ebay Page</a></p>
					<p>Price: {props.toy.price}</p>
					{!props.toy._id && <button className="btn btn-primary btn-block" onClick={() => props.addToyToWishlist(props.idx)}>Add to wishlist</button>}
					{props.toy._id && <button className="btn btn-primary btn-block" onClick={() => props.removeToyFromWishlist(props.toy._id)}>Remove from wishlist</button>}
				</div>
			</div>
		</div>
	);
}

export default Toy;