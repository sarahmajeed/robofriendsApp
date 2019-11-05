import React from 'react';

const SearchBox =(props)=>{
    return (
        <div className='tc pa2 '>
        <input type = 'search' placeholder='Search Robots' onChange={props.handleChange}/>
        </div>
    );
}

export default SearchBox;