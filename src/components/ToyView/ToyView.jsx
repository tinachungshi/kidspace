import React from 'react';

const ToyView = (props) => {
  return (
    <div>
      {props.toys.map((toy, i) => {
        return (
          <div key={i} className="row">
            <div className="col-sm-4 col-md-4">
              <div className="thumbnail">
                <img src={toy.galleryURL[0]} />
              </div>
              <div className="caption">
                <p><b>{toy.title[0]}</b></p>
                <p>Link: <a href={toy.viewItemURL[0]} target='_blank'>Ebay Page</a></p>
                <p>Price: {toy.sellingStatus[0].currentPrice[0].__value__}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ToyView;

// <div class="row">
//   <div class="col-sm-6 col-md-4">
//     <div class="thumbnail">
//       <img src="..." alt="...">
//       <div class="caption">
//         <h3>Thumbnail label</h3>
//         <p>...</p>
//         <p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>
//       </div>
//     </div>
//   </div>
// </div>
