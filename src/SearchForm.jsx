import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useGlobalContext } from './context'
import debounce from 'lodash.debounce';

const SearchForm = () => {
  const [ searchTerm, setSearchTerm ] = useState('')
  const { query, setQuery } = useGlobalContext();

  const debouncedQuery = useCallback(debounce((term) => {
    if (term)
      setQuery(term)
  }, 3000), [])

  useEffect(() => {
    debouncedQuery(searchTerm)
  }, [searchTerm, debouncedQuery])

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <h2>search movies</h2>
      <input
        type='text'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </form>
  )
}

export default SearchForm;