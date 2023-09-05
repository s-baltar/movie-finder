import { useState, useEffect, useCallback } from "react";

const API_ENDPOINT_PREFIX = `https://api.watchmode.com/v1/`
const API_KEY = `/?apiKey=${import.meta.env.VITE_WATCHMODE_API_KEY}`;


const useFetch = (endpoint, urlParams) => {
  const [isLoading, setIsLoading ] = useState(true)
  const [data, setData] = useState(null)

  const fetchMovies = async (url) => {
    setIsLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()

      if (data.statusCode !== 400) {
        setData(data.results || data )
      }

      console.log(data)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchMovies(`${API_ENDPOINT_PREFIX}${endpoint}${API_KEY}${urlParams}`)
  }, [urlParams])

  return { isLoading, data }
}

export default useFetch