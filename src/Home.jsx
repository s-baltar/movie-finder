import SearchForm from "./SearchForm";
import Movies from "./Movies";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="home">
      <Navbar/>
      <SearchForm/>
      <Movies/>
    </div>

  );
};

export default Home;