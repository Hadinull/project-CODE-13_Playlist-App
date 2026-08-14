import React from 'react';
{/*Track receives a single track object and the onAdd handler */}
function Track( { track, onAdd, onRemove } ){
    return(
     <div>
        {/*here we have track to accses the const serachResult from app. */}
      <h3>{track.name}</h3>
      <p>{track.artist}</p> 
      <p>{track.album}</p>  
      {/* Call onAdd when "+" button is clicked to add this track to playlist */}
       { onAdd &&<button onClick={() => onAdd(track)}>+</button> }
     { onRemove &&<button onClick={() => onRemove(track)}>-</button>}
     </div>
    )
};
export default Track;