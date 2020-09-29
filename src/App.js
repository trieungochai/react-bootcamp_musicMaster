import React from 'react';

class App extends React.Component {
  state = {
    artistQuery: '',
  };

  updateArtistQuery = (event) => {
    this.setState({ artistQuery: event.target.value });
  };
  
  searchArtist = () => {
    console.log('this.state', this.state);
  };

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.searchArtist();
    }
  };

  render() {
    return (
      <div>
        <h2>Music Master</h2>
        <input
          onChange={this.updateArtistQuery}
          onKeyPress={this.handleKeyPress}
          placeholder='Search for an Artist'
        />
        <button onClick={this.searchArtist}>Search</button>
      </div>
    );
  };
};

export default App;
