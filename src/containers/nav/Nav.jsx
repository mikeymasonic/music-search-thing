import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Nav = ({ history }) => {
  return (
    <section>
      <Link to='/'><button>Search Artists</button></Link>
      <button onClick={() => history.goBack()}>back</button>
    </section>
  );
};

Nav.propTypes = {
  history: PropTypes.object.isRequired
};

export default withRouter(Nav);
