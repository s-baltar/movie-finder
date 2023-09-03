import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useGlobalContext } from './context'
import debounce from 'lodash.debounce';

const SearchForm = () => {
  const [ searchTerm, setSearchTerm ] = useState('')
  const { query, setQuery } = useGlobalContext();

  const debouncedQuery = useCallback(debounce((term) => {
    if (term)
      setQuery(term)
  }, 200), [])

  useEffect(() => {
    debouncedQuery(searchTerm)
  }, [searchTerm, debouncedQuery])

  return (
    <form className='search-form' onSubmit={(e) => e.preventDefault()}>
      <input
        className='form-input'
        type='text'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </form>
  )
}

export default SearchForm;