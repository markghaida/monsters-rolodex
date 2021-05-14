import React from 'react';
import './search-bar.styles.css'

export const SearchBar = ({placeHolder, handleChange}) => (
        <div className='search'>
            <input 
             type='search' 
             placeholder={placeHolder}
             onChange={handleChange} 
            />  
        </div>
)