// Modified From Pluralsight Course by Cory House
import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/cdi-tool" activeClassName="active">Core Deposit Intangible Tool</Link>
      {" | "}
      <Link to="/portfolios" activeClassName="active">Deposit Portfolio</Link>
      {" | "}
      <Link to="/markets" activeClassName="active">Current Markets & Curves</Link>
      {" | "}
      <Link to="/about" activeClassName="active">About</Link>
      {loading && <LoadingDots interval={100} dots={20}/>}
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
