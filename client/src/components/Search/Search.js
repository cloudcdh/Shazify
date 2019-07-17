import React, { Component } from "react";
import queryString from "query-string";
import Track from "../Track";
import Grid from "@material-ui/core/Grid";

class Search extends Component {
  state = {
    searchList: [],
    searchInput: ""
  };

  getAccessToken = () => {
    const hash = queryString.parse(window.location.hash);
    return hash.access_token;
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSearch = e => {
    e.preventDefault();
    const searchLimit = 20;
    const searchFilter = encodeURI(this.state.searchInput);
    const access_token = this.getAccessToken();

    fetch(
      `https://api.spotify.com/v1/search?q=${searchFilter}&type=track&market=PL&limit=${searchLimit}`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }
    )
      .then(data => data.json())
      .then(result => this.setState({ searchList: result.tracks.items }))
      .catch(err => console.error(err));
  };

  getPlayer = e => {
    e.preventDefault();
    const access_token = this.getAccessToken();

    fetch("https://api.spotify.com/v1/me/player", {
      headers: {
        Authorization: `Bearer ${access_token}`,
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(data => data.json())
      .then(result => console.log(result))
      .catch(error => console.error(error));
  };

  render() {
    const { searchList } = this.state;
    const { playTrack } = this.props;

    return (
      <Grid direction="column">
        <Grid>
          <div className="input-field col s12">
            <input
              id="serachInput"
              type="text"
              onChange={this.handleChange}
              name="searchInput"
              className="validate"
            />
            <label htmlFor="serachInput">Search a track...</label>
          </div>
          <button
            className="btn btn-block btn-success"
            onClick={this.handleSearch}
          >
            Search
          </button>
        </Grid>
        <Grid>
          {searchList.length > 0 &&
            searchList.map(track => (
              <Track key={track.id} track={track} playTrack={playTrack} />
            ))}
        </Grid>
      </Grid>
    );
  }
}
export default Search;
