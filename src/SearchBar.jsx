import {useState} from 'react';

function SearchBar(){

    return(
     <div>
        <label htmlFor="search">Search</label>
        <input id="search" type="text"/>
        <button type='submit'>Search</button>
     </div>
    );
};
export default SearchBar;