import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import MovieInfo from './components/movieInfo';
import SearchBar from './components/searchBar';

function App() {
  const [searchKey, setSearchKey] = useState('')
  const [movies, setMovies] = useState([])
  const [filteredMovies, setFilteredMovies] = useState(movies)

  useEffect(()=>{
    fetch("https://www.omdbapi.com/?apikey=45f0782a&s=war")
    .then(res=>res.json())
    .then((movie)=>setMovies(movie.Search))

  },[])


  useEffect(()=>{
    const newFilteredMovie = movies&&movies.filter&&movies.filter((titles)=>{
      return titles.Title.toLocaleLowerCase().includes(searchKey)
    })
    setFilteredMovies(newFilteredMovie)
  },[searchKey,movies])

  const onUserSearch=(event)=>{
    const searchVal= event.target.value.toLocaleLowerCase()
    setSearchKey(searchVal)
  }
  return (
    <div className="App">

      <SearchBar searchType="Search" onSearchHandler={onUserSearch} className="SearchBar" placeHolder="Search for Movie Title..."/>
      <MovieInfo movieData={filteredMovies}/>
      
    </div>
  );
}

export default App;


