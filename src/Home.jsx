import SearchForm from "./SearchForm";
import Movies from "./Movies";

const Home = () => {
  return (
    <div className="home">
      <SearchForm/>
      <Movies/>
    </div>

  );
};

export default Home;