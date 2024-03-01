import React from "react";
// import Poster from './asset/images/Poster.png';
import logo from './asset/images/logo1.png';
import Ticket from './asset/images/Tickets.png';
import List from './asset/images/List.png';
// import PIC from './asset/images/pic1.jpg';
import './Trailer.css';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { MrMiyagi } from '@uiball/loaders';




function Trailer() { 
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const apiKey = '523c8b46aafc35c66f9fd4323369516c'; // Replace with your TMDB API key
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
      .then((response) => {
        setMovieDetails(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setIsLoading(false);
      });
  }, [id]);



    return (

        <div className="container-sidebar">
       
        <div className="sidebar">
    <div className="sidebar-content">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <h2>
        Movie Box

        </h2>
      </div>
      
     <button className="btn-nrm">
        <i className="fa fa-home"></i> <Link to="/">Home</Link>
      </button>
      
      <button className="btn-nrm">
        <i className="fa fa-film"></i> Movies
      </button>
      <button className="btn-nrm">
        <i className="fa fa-tv"></i> TV Series
      </button>
      <button className="btn-nrm">
        <i className="fa fa-calendar"></i> Upcoming
      </button>
      <div className="paragraphs">
        <p className="para-head">Play movie quizes and<br/> earn <br/>free tickets</p>
        <p>50k people are playing</p>
        <button>Start playing</button>
      </div>
      <button className="btn-nrm">
        <i className="fa fa-sign-out"></i> Logout
      </button>
    </div>
  </div>
  <div className="trailersection">
      {isLoading ? (
          <p className="loader"><MrMiyagi 
          size={100}
          lineWeight={3.5}
          speed={1} 
          color="darkblue" 
         /></p>
        ) : (
          
        <div>
          <div className="trailervid">
            <div className="play-button">
              {/* Add your play button or video player here */}
            </div>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
              className="trailerimg"
              alt="Movie Poster"
            />
          </div>

          <div className="detailssection">
            <div className="sectionone">
              <div className="moviename">
                <div className="sec1">
                  <span>{movieDetails.title}</span>.
                  <span>{movieDetails.release_date.substring(0, 4)}</span>. {/* Extract year from release date */}
                  <span>{movieDetails.adult ? "R" : "PG-13"}</span>. {/* Display rating */}
                  <span>{Math.floor(movieDetails.runtime / 60)}h {movieDetails.runtime % 60}m</span> {/* Convert runtime to hours and minutes */}
                </div>
                <div className="sec2">
                  {movieDetails.genres.map((genre) => (
                    <span key={genre.id}>{genre.name}</span>
                  ))}
                </div>
              </div>

              <div className="overview">
                <p>{movieDetails.overview}</p>
              </div>
              <div className="crew">
              {movieDetails.name && <p>Director: {movieDetails.director}</p>}

                  {movieDetails.writer && <p>Writers: {movieDetails.writer}</p>}

                  {movieDetails.credits && movieDetails.credits.cast && (
                    <p>Stars: {movieDetails.credits.cast.slice(0, 3).map((actor) => actor.name).join(", ")}</p>
                  )}
              </div>

              <div className="toprated">
                <span>Top rated movie #{movieDetails.vote_average}</span>
                <span>{movieDetails.vote_count} votes</span>
              </div>
            </div>

            <div className="sectiontwo">
              <div className="rateviews">
                <div className="ratin">
                  <div className="star-icon">
                    <i className="fas fa-star"></i>
                  </div>
                  <div className="rating-number">
                    {movieDetails.vote_average} |
                  </div>
                  <div className="votes">
                    {movieDetails.vote_count}
                  </div>
                </div>
              </div>
              <div className="showtime">
                <button>
                  <img src={Ticket} alt="Clock Icon" width="20" height="20" />
                  See Showtimes
                </button>
                <button>
                  <img src={List} alt="Film Icon" width="16" height="16" />
                  More Watch Options
                </button>
              </div>
              <div className="monthshow">
                {/* Display images or content related to the movie */}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

    

export default Trailer;





