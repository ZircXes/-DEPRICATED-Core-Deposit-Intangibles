import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <div style={{backgroundColor: "#FFDDBB"}} className="jumbotron">
          <h1>Core Deposit Intangibles Calculation Tool</h1>
          <p>Simplified web app using React/Redux + Azure Lambdas & Web Store</p>
          <Link to="about" className="btn btn-primary btn-lg">About this Application</Link>
        </div>
        <div className="jumbotron">
          <h2>Getting Started</h2>
        </div>
        <div className="jumbotron">
          <h3>Simple Mode - Use Industry Bank Data</h3>
        </div>
      </div>
    );
  }
}

export default HomePage;
