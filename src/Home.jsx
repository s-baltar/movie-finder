import SearchForm from "./SearchForm";
import Movies from "./Movies";

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