import React from 'react';

export const SearchBar = () => {
    return(
        <div>
            <input 
             type='search' 
             placeholder='search for monsters' 
             onChange={ e => this.setState({searchField: e.target.value})} 
            />  
        </div>
    )
}