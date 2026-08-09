import {useState} from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import PlayList from './Playlist';
function App(){
  return(
    <div>
 <SearchBar />
 <SearchResults />
 <PlayList />
</div>
  )
}
export default App;