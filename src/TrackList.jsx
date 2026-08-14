import {useState} from 'react';
import Track from './Track';
{/* here tracklist now have the prop "tracks" and tracks has been set to searchResult*/}
function TrackList( {tracks, onAdd, onRemove}){
    return(
     <div>
        {/*Loop through tracks array and render a Track component for each song */}
      {tracks?.map((song)=>(
        <Track key={song.id} track={ song } onAdd={ onAdd } onRemove={ onRemove }/>
      ))
      }
     </div>
    )
};
export default TrackList;