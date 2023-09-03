import React, { useState, useContext} from "react"

import useFetch from "./useFetch";

const AppContext = React.createContext();

const getStorageTheme = () => {
  let theme = 'light-theme';
  if (localStorage.getItem('theme' )) {
    theme = localStorage.getItem('theme');
  }
  return theme;
}

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState('');
  const [theme, setTheme] = useState(getStorageTheme());
  const { isLoading, data: movies } = useFetch(`autocomplete-search`, `&search_value=${query}&search_type=2`)

  return (
    <AppContext.Provider value={{isLoading, query, setQuery, movies, theme, setTheme}}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };