import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getLyrics } from '../../services/getArtistsDetailsAPI';

export default class LyricContainer extends Component {
  static propTypes = {
    match: PropTypes.object
  }

  state = {
    lyrics: '',
    loading: true,
    error: null
  }

  fetchLyrics = () => {
    return getLyrics(
      this.props.match.params.artistName,
      this.props.match.params.songTitle)
      .then (({ lyrics }) => {
        this.setState({
          lyrics,
          loading: false
        });
      })
      .catch(err => this.setState({
        error: err,
        loading: true
      }));
  }

  componentDidMount() {
    this.fetchLyrics();
  }

}
