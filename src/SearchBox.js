import React from 'react'

const SearchBox = ({updateSearchFilter}) => {
  return (
    <div className='pa2'>
        <input 
            className='pa3 ba b--green bg-lightest-blue'
            type="search" 
            placeholder='search robots'
            onChange={updateSearchFilter}
        />
    </div>
  )
}

export default SearchBox