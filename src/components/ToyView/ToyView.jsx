import React, {Component} from 'react';
import HomePage from '../../pages/HomePage/HomePage';

const ToyView = (props) => {
  console.log('this is props', props)
  return (
    <div>
      {props.toys.map((toy, i) => {
        return (
          <div key={i} className="row">
            <p>{toy.title[0]}</p>
            <img src={toy.galleryURL[0]} />
            <a href={toy.viewItemURL[0]} target='_blank'>Ebay Page</a>
            <p>{toy.sellingStatus[0].currentPrice[0].__value__}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ToyView;

