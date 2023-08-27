import { useState, useEffect, useCallback } from "react";

const API_ENDPOINT = `https://api.watchmode.com/v1/autocomplete-search/?apiKey=${import.meta.env.VITE_WATCHMODE_API_KEY}`;

const useFetch = (urlParams) => {
  const [data, setData] = useState(null)

  const fetchMovies = async (url) => {
    try {
      const response = await fetch(url)
      const data = await response.json()

      if (data.statusCode !== 400) {
        setData(data.results)
      }

      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}${urlParams}`)
  }, [urlParams])

  return { data }
}

export default useFetch