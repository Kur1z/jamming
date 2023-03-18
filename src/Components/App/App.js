import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlst.';

class App extends React.Component {
  constructor(props){
    super(props);
   this.state = {
    searchResults: [{name: 'name1',artist:'artist1', album: 'album1', id:'id1'},
    {name: 'name2',artist:'artist2', album: 'album2', id:'id2'},
    {name: 'name3',artist:'artist3', album: 'album3', id:'id3'}],
    playlistName: 'playlist1',
    playlistTracks: [{name: 'Pname1',artist:'Partist1', album: 'Palbum1', id:'Pid1'},
    {name: 'Pname2',artist:'Partist2', album: 'Palbum2', id:'Pid2'},
    {name: 'Pname3',artist:'Partist3', album: 'Palbum3', id:'Pid3'}]
   }
  }
  render(){
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
       <div className="App">
         <SearchBar/> 
          <div className="App-playlist">
            <SearchResults searchResults = {this.state.searchResults} /> 
            <Playlist playlistName = {this.state.playlistName} playlistTracks= {this.state.playlistTracks}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
