import { useState, useEffect } from "react";
import useDebounce from './useDebounce';

const API_ENDPOINT = `https://api.watchmode.com/v1/autocomplete-search/?apiKey=${import.meta.env.VITE_WATCHMODE_API_KEY}`;

const useFetch = (urlParams) => {
  const [data, setData] = useState(null)

  const debouncedQuery = useDebounce(urlParams, 500)

  const fetchMovies = async (url) => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (debouncedQuery)
    {
      fetchMovies(`${API_ENDPOINT}${urlParams}`)
      console.log(`${urlParams}`)
    }
  }, [debouncedQuery]);

  return { data }
}

export default useFetch