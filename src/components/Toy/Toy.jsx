import React from 'react';
import './Toy.css';

const Toy = (props) => {
	
	return (
		<div className="col-md-6">
			<div className="thumbnail">
				<img src={props.toy.photoUrl} alt="Ebay" className="img-responsive" />
				<div className="caption">
					<p className="title-text"><b>{props.toy.name}</b></p>
					<p className="ebay-text">Link: <a href={props.toy.link} target="_blank" rel="noopener noreferrer">Ebay Page</a></p>
					<p className="ebay-text">Price: {props.toy.price}</p>
					{!props.toy._id && <button className="btn btn-primary btn-block" onClick={() => props.addToyToWishlist(props.idx)}>Add to wishlist</button>}
					{props.toy._id && <button className="btn btn-primary btn-block" onClick={() => props.removeToyFromWishlist(props.toy._id)}>Remove from wishlist</button>}
				</div>
			</div>
		</div>
	);
}

export default Toy;