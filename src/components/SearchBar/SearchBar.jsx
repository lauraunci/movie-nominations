import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
    return(
        <div className='title-search'>
            <form>
                <dl>
                <dt><label>
                    Movie title
                </label></dt>
                <dd><input 
                type='text'
                id='title-input'
                placeholder=''
                /></dd>
                </dl>
            </form>
        </div>
    )
}

export default SearchBar;