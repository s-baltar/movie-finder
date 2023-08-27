import { useParams } from "react-router-dom"

import useFetch from "./useFetch";

const Movie = () => {

  const { id } = useParams()
  const { isLoading, data: movie } = useFetch(`title/${id}/details`, `&append_to_response=sources`)

  if (isLoading) {
    return <div></div>
  }

  const { title, plot_overview: plot, runtime_minutes: runtime, year, poster: img, sources } = movie

  console.log(sources)

  return (

    <section>
      <img src={img} alt={title}/>
      <div>
        <h2>{title}</h2>
        <p>{plot}</p>
        <h4>{year} {runtime} min</h4>
        <h3>available on</h3>
        {sources.map((source) => {
          const { name, region } = source

          return <h5>{name}</h5>
        })}
      </div>
    </section>
  )
}
export default Movie