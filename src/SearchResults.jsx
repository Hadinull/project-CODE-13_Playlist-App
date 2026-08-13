import React from 'react';
import TrackList from './TrackList';
{/*here we Receive userSearchResult and onAdd handler from App */}
function SearchResults( {userSearchResult, onAdd, onRemove} ){
    return(
        <div>
            <h2>Result</h2>
{/*here we Pass search results down to TrackList as "tracks"*/}
            <TrackList tracks={ userSearchResult } onAdd={ onAdd } onRemove={onRemove}/>

        </div>
    )
}
export default SearchResults;