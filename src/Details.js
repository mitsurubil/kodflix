import React from 'react';
import { Link } from 'react-router-dom';

class Details extends React.Component {

  constructor() {
    super();
    this.state = {
      welcomeMessage: 'Hello, this will be the details page for each Movie & TV show :)'
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        welcomeMessage: 'Coming soon! :)'
      });
    }, 3000);
  }
  render() {
    return (
      <Link to='/'>
        <h1>{this.state.welcomeMessage}</h1>
      </Link>
    );
  }
}

export default Details;