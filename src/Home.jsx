import Movies from "./Movies";
import SearchForm from "./SearchForm";

const Home = () => {
  return (
    <div>
      <h1>Movie Finder</h1>
      <SearchForm/>
      <Movies/>
    </div>

  );
};

export default Home;