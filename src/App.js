import React from 'react';
import Artist from './Artist';

const API_REQUEST = 'https://spotify-api-wrapper.appspot.com/';

class App extends React.Component {
  state = {
    artistQuery: '',
    artist: null,
    tracks: [],
  };

  updateArtistQuery = (event) => {
    this.setState({ artistQuery: event.target.value });
  };
  
  searchArtist = () => {
    fetch(`${API_REQUEST}/artist/${this.state.artistQuery}`)
      .then(response => response.json())
      .then(json => {
        if (json.artists.total) {
          const artist = json.artists.items[0];
          this.setState({ artist });

          fetch(`${API_REQUEST}/artist/${artist.id}/top-tracks`)
            .then(response => response.json())
            .then(json => this.setState({ tracks: json.tracks }))
            .catch(error => alert(error.message));
        }
      })
      .catch(error => console.log(error.message));
  };

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.searchArtist();
    }
  };

  render() {
    console.log('this state', this.state);
    return (
      <div>
        <h2>Music Master</h2>
        <input
          onChange={this.updateArtistQuery}
          onKeyPress={this.handleKeyPress}
          placeholder='Search for an Artist'
        />
        <button onClick={this.searchArtist}>Search</button>
        <Artist artist={this.state.artist}/>
      </div>
    );
  };
};

export default App;
