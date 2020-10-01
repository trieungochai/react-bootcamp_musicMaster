import React from 'react';
import Artist from './Artist';
import Search from './Search';
import Tracks from './Tracks';

const API_REQUEST = 'https://spotify-api-wrapper.appspot.com/';

class App extends React.Component {
  state = {
    artist: null,
    tracks: [],
  };
  
  searchArtist = (artistQuery) => {
    fetch(`${API_REQUEST}/artist/${artistQuery}`)
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

  render() {
    return (
      <div>
        <h2>Music Master</h2>
        <Search searchArtist={this.searchArtist}/>
        <Artist artist={this.state.artist}/>
        <Tracks tracks={this.state.tracks}/>
      </div>
    );
  };
};

export default App;
