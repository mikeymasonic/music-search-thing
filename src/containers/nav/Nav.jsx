import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Nav.css';

const Nav = ({ history }) => {
  return (
    <section className={styles.nav}>
      <Link to='/'><button>home</button></Link>
      <button onClick={() => history.goBack()}>back</button>
    </section>
  );
};

Nav.propTypes = {
  history: PropTypes.object.isRequired
};

export default withRouter(Nav);
