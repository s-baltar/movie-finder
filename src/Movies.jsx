import { useGlobalContext } from "./context";

const Movies = () => {
  const { movies } = useGlobalContext()

  return (
    <section>
      {movies.map((movie) => {
        const { id, name: title, image_url: img, year } = movie

        return (
          <article>
            <img src={img} alt={title} />
            <div>
              <h4>{title}</h4>
              <p>{year} </p>
            </div>
          </article>
        )

      })}
    </section>
  );
};

export default Movies;