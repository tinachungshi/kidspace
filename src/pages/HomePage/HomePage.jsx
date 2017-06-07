import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import toyAPI from '../../utils/toyAPI';


class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toys: []
    };
  }

  componentDidMount() {
    toyAPI.index().then(toys => {
      this.setState({toys});
    });
  }

  render() {
    return (
      <div className="HomePage">
        <h1>TOYS</h1>
        {this.state.toys.map(toy =>
          <div>
            <p>{toy.title[0]}</p>
            <img src={toy.galleryURL[0]} />
            <a href={toy.viewItemURL[0]} target='_blank'>Ebay Page</a>
            <p>{toy.sellingStatus[0].currentPrice[0].__value__}</p>


          </div>
        )}
      </div>
    );
  }
}

export default HomePage;
