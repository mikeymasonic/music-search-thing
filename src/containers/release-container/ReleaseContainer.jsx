import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getArtistReleases } from '../../services/getArtistsDetailsAPI';

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
}
