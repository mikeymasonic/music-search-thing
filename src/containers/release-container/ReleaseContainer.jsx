import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getArtistReleases } from '../../services/getArtistsDetailsAPI';
import Nav from '../nav/Nav';
import Releases from '../../releases/Releases';
import Paging from '../../paging/Paging';

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
        this.ListeningStateChangedEvent({
          releaseArray: albums,
          loading: false,
          totalPages: Math.ceil(totalPages / 25)
        });
      })
      .catch(err => this.ListeningStateChangedEvent({
        error: err,
        loading: true
      }));
  }

  changePageCount = (page) => {
    this.ListeningStateChangedEvent({ page });
    this.props.history.push(`/releases/${this.state.artistName}/${this.props.match.params.artistId}?page=${page}`);
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
      <div>
        <Nav />
        <h3>Srry! There are no releases for this artist...</h3>
      </div>
    );

    if(loading) return (
      <div>
        <h2>Loading...</h2>
      </div>
    );

    if(totalPages === 1) return (
      <div>
        <h2>Releases for {this.props.match.params.artistName}</h2>
        <Nav />
        <Releases artistName={this.props.match.params.artistName} releaseArray={releaseArray} />
      </div>
    );

    if(totalPages === 0) return (
      <div>
        <Nav />
        <h3>Srry!  There are no releases for this artist...</h3>
      </div>
    );

    return (
      <>
        <h2>
        Releases for {this.props.match.params.artistName}
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
      </>
    );
  }
}
