import React from 'react';

const SearchBox =(props)=>{
    return (
        <div className='pa2'>
        <input className=' ml1 pa3 ba b--green bg-lightest-blue' type = 'search' placeholder='Search Robots' onChange={props.handleChange}/>
        </div>
    );
}

export default SearchBox;