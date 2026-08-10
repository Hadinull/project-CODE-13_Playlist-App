import React from 'react';
import TrackList from './TrackList';
{/*here we get {userSearchResult} from app */}
function SearchResults( {userSearchResult} ){
    return(
        <div>
            <h2>Result</h2>
{/*and here we pass that to tacklist as a new distructing prop "tracks" will be set = to { userSearchResult }*/}
            <TrackList tracks={ userSearchResult }/>

        </div>
    )
}
export default SearchResults;