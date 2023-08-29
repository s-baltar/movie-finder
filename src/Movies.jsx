import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";

const Movies = () => {
  const { isLoading, movies } = useGlobalContext()

  if (movies === null || isLoading)
  {
    return <div></div>
  }

  return (
    <section className="movies">
      {movies.map((movie) => {
        const { id, name: title, image_url: img, year } = movie

        return (
          <Link className="movie" key={id} to={`/movies/${id}`}>
            <article>
              <img src={img} alt={title} />
              <div className="movie-info">
                <h4>{title}</h4>
                <p>{year} </p>
              </div>
            </article>
          </Link>
        )
      })}
    </section>
  );
};

export default Movies;