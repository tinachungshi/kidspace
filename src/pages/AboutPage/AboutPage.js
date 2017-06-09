import React from 'react';
import './About.css';

const About = (props) => {

  return (
    <div>
      <center>
        <h1 className="h1-about">What's Kiddy Space?</h1>
        <div className="parallax"></div>
        <h3 className="h3-about">Ebay can be confusing at times-- we understand, which is why we're here!</h3>
        <h3 className="h3-about">Kiddy Space is here to bring you Ebay's bestselling toys!</h3>
        <p className="p-about">Just create an account and click away! Add items to your wishlist before deciding what you want to buy! </p>
        <p className="p-about">Created by <a href="https://tinachungshi.github.io/portfolio/" target="_blank" rel="noopener noreferrer">Tina Chung</a>. Come check out my <a href="https://github.com/tinachungshi/kidspace" target="_blank" rel="noopener noreferrer">Github</a> for more information.</p>
      </center>
    </div>
  );
}

export default About;
