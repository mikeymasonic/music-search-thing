import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getArtistReleases } from '../../services/getArtistsDetailsAPI';
import Nav from '../nav/Nav';
import Releases from '../../components/Releases/Releases';
import Paging from '../../components/Paging/Paging';
import LoadingGif from '../../assets/Load.gif';
import styles from './ReleaseContainer.css';

export default class ReleaseContainer extends Component {
  static propTypes = {
    match: PropTypes.object,
    history: PropTypes.object,
    location: PropTypes.object
  }

  state = {
    releaseArray: [],
    loading: true,
    page: 1,
    totalPages: 1,
    error: null
  }

  fetchReleases = () => {
    return getArtistReleases(this.props.match.params.artistId, this.state.page)
      .then(({ totalPages, albums }) => {
        this.setState({
          releaseArray: albums,
          loading: false,
          totalPages: Math.ceil(totalPages / 25)
        });
      })
      .catch(err => this.setState({
        error: err.message,
        loading: true
      }));
  }

  changePageCount = (page) => {
    this.setState({ page });
    this.props.history.push(`/releases/${this.props.match.params.artistName}/${this.props.match.params.artistId}?page=${page}`);
  }

  componentDidMount() {
    this.fetchReleases();
    const pageSearch = new URLSearchParams(this.props.location.search);
    const page = parseInt(pageSearch.get('page')) || 1;
    if(pageSearch) {
      this.setState({ page });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.page !== this.state.page) return this.fetchReleases();
  }

  render() {
    const {
      releaseArray,
      page,
      error,
      loading,
      totalPages
    } = this.state;

    if(error) return (
      <section>
        <Nav />
        <h3 className={styles.titleh3}>Srry! There are no releases for this artist...</h3>
      </section>
    );

    if(loading) return (
      <section className={styles.releaseContainer}>
        <h2 className={styles.titleh2}>loading...</h2>
        <img alt='vinyl record spinning' src={LoadingGif}/>
      </section>
    );

    if(totalPages === 1) return (
      <section>
        <h2>Releases for {this.props.match.params.artistName}</h2>
        <Nav />
        <Releases artistName={this.props.match.params.artistName} releaseArray={releaseArray} />
      </section>
    );

    if(totalPages === 0) return (
      <section>
        <Nav />
        <h3 className={styles.titleh3}>Srry!  There are no releases for this artist...</h3>
      </section>
    );

    return (
      <section>
        <h2 className={styles.titleh2}>
        releases for {this.props.match.params.artistName}
        </h2>
        <Nav />
        <Paging 
          onClickPrevious={() => this.changePageCount(page - 1)} 
          onClickNext={() => this.changePageCount(page + 1)}
          disableNext={totalPages === page}
          disablePrev={page === 1}
          currentPage={page}
          totalPages={totalPages}
        />
        <Releases artistName={this.props.match.params.artistName} releaseArray={releaseArray} />
      </section>
    );
  }
}
