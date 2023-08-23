import React from 'react';
import { useGlobalContext } from './context'

const SearchForm = () => {
  const { query, setQuery } = useGlobalContext();

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <h2>search movies</h2>
      <input
        type='text'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  )
}

export default SearchForm;