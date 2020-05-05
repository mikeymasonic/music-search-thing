import React from 'react';
import { withRouter, Link } from 'react-router-dom';

const Nav = ({ history }) => {
  return (
    <section>
      <Link to='/'><button>Search Artists</button></Link>
      <button onClick={() => history.goBack()}>back</button>
    </section>
  );
};

export default withRouter(Nav);
