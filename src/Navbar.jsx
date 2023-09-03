import { useEffect } from 'react';
import { FaMoon } from 'react-icons/fa';
import { ImSun } from 'react-icons/im';
import { useGlobalContext } from './context';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const {theme, setTheme} = useGlobalContext()

  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
  }

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <Link to={'/'}>
            <h2>where to watch</h2>
          </Link>
        </div>
        <div className="btn-container">
          <button onClick={toggleTheme}>
            {theme === 'light-theme' ? <ImSun/> : <FaMoon/>}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar