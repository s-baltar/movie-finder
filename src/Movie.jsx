import { useParams } from "react-router-dom"

import useFetch from "./useFetch";

const url = 'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

const Movie = () => {

  const { id } = useParams()
  const { isLoading, data: movie } = useFetch(`title/${id}/details`, `&append_to_response=sources`)

  if (isLoading) {
    return <div></div>
  }

  const { title, plot_overview: plot, year, poster: img, runtime_minutes: runtime, sources, us_rating} = movie

  const reducedSources = sources.reduce((accumulator, current) => {
    const existingItem = accumulator.find(item => item.source_id === current.source_id)

    if (!existingItem)
      accumulator.push(current)

    return accumulator
  }, [])

  return (

    <section className="movie-page">
      <img src={img === null ? url : img} alt={title}/>
      <div className="movie-page-info">
        <h2>{title}</h2>
        <div className="movie-page-details">
          <h5>{year}</h5>
          {runtime && <h5>{runtime}m</h5>}
          <h5>{us_rating}</h5>
        </div>
        <p>{plot}</p>
        {reducedSources.length >0 ? <h3>available on</h3> : <h3>no available services found</h3>}
        {reducedSources.map((source) => {
          const { source_id: id, name, web_url: url, format, type, price} = source

          return (
            <article className="source-list" key={id}>
              <a href={url}>{name}</a>
              {type === 'rent' ? <h6>Rent for ${price}</h6> : <h6>{type}</h6>}
            </article>
          )
        })}
      </div>
    </section>
  )
}
export default Movie