import React, { useState, useContext } from "react"

import useFetch from "./useFetch";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState('');
  const { data: movies } = useFetch(`&search_value=${query}`)

  console.log(movies)

  return (
    <AppContext.Provider value={{query, setQuery, movies}}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };