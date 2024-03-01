import React, { useState, useEffect } from "react";
import axios from "axios";
import FavoriteNot from '../asset/images/Favorite.svg';
import FavoriteYes from '../asset/images/Favorite1.svg';
import '../index.css';
import imdb from '../asset/images/imdb.png'; 
import tomato from '../asset/images/tomato.png';
import { Link } from "react-router-dom";
import { MrMiyagi } from '@uiball/loaders';




function MovieCard({ movie, searchResults }) {
  
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Check if the movie is in the favorites stored in localStorage
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorite(favorites.includes(movie.id));
  }, [movie.id]);

  const addToFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites.push(movie.id);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    setIsFavorite(true);
  };

  const removeFromFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const updatedFavorites = favorites.filter((id) => id !== movie.id);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setIsFavorite(false);
  };


  return (
    <Link to=
    // "/Trailer/movie:id"
     {`/movie/${movie.id}`}>
    {/*  */}

    <div className="movie-container">
    <img 
     src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
    alt={movie.title}
    data-testid="movie-poster"
    className="movie-image" />

    <div className="favorite-icon">
    	 {isFavorite ? (
                <img
                  className="favorite"
                  src={FavoriteYes}
                  alt="favorite movie"
                  onClick={removeFromFavorites}
                />
              ) : (
                <img
                  className= "favorite"
                  src={FavoriteNot}
                  alt="favorite movie"
                  onClick={addToFavorites}
                />
              )}
    </div>
    <div className="movie-title">{movie.title}</div>
    <div className="imdb-rating">
       <div className="imdb">
       	 <img 
       	  src={imdb}
       	  alt="IMDb" className="imdb-icon" />
        <span>{movie.vote_average} / 100</span>
       </div>
      <div className="tomato">
      	  <img 
      	 src={tomato} 
      	alt="IMDb" 
      	className="tomato-icon" />
        <span>{movie.vote_average * 10}%</span>
      </div>
    </div>
</div>
 </Link>
      
      );
    }

function MovieList({searchResults}) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const apiKey = '523c8b46aafc35c66f9fd4323369516c'; // Replace with your TMDB API key
    if (searchResults && searchResults.length > 0) {
      // If searchResults is provided, use it as the movie list
      setMovies(searchResults);
      setIsLoading(false);
    } else {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
      .then((response) => {
        setMovies(response.data.results.slice(0, 10)); // Slice to get the first 10 movies
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setIsLoading(false);
      });
    }
  }, [searchResults]);

  return (
    <section className="layout">
     {isLoading ? (
        <p className="loader"><MrMiyagi 
        size={100}
        lineWeight={3.5}
        speed={1} 
        color="darkblue" 
       /></p>
      ) : (
        <div className="container-movie">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </section>
   
  );
}


export default MovieList;



















