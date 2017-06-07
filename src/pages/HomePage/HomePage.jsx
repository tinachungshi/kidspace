import React, {Component} from 'react';
import toyAPI from '../../utils/toyAPI';
import ToyView from '../../components/ToyView/ToyView';


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
      <div className="HomePage container" >
        <h1>TOYS</h1>

        <ToyView toys={this.state.toys} />

      </div>
    );
  }
}

export default HomePage;
