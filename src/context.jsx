import React, { useState, useContext, useEffect } from "react"

import useFetch from "./useFetch";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState('');
  const { isLoading, data: movies } = useFetch(`autocomplete-search`, `&search_value=${query}&search_type=2`)

  return (
    <AppContext.Provider value={{isLoading, query, setQuery, movies}}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };