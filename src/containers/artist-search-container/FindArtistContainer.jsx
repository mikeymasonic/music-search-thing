import React, { Component } from 'react';
import { getArtists } from '../../../services/getArtistsDetailsAPI';


export default class FindArtistsContainer extends Component {
  static propTypes = {
    history: this.propTypes.object,
    location: this.propTypes.object
  }

  state = {
    artistArray: [],
    artist: '',
    loading: false,
    error: null,
    page: 1,
    totalPages: 1
  }

  onInputChange = ({ target }) => {
    this.setState({ artist: target.value }, () => {
      this.props.history.push(`/?query=${this.state.artist}`);
    });
  }

  fetchArtists = () => {
    return getArtists(this.state.artist, this.state.page)
      .then(({ totalPages, singers }) => {
        this.setState({
          artistArray: singers,
          loading: false,
          totalPages: Math.ceil(totalPages / 25)
        });
      })
      .catch(err => this.setState({
        error: err,
        loading: true
      }));
  }

  onButtonClick = () => {
    this.setState({ loading: true, page: 1 });
    return this.fetchArtists();
  }

  changePageCount = (page) => {
    this.setState({ page });
    this.props.history.push(`/?query=${this.state.artist}&page=${page}`);
  }
}

