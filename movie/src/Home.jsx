import React, {useState, useEffect} from 'react';
import './index.css';
import logo from './asset/images/logo-pic.png';
import Menu from './asset/images/Menu.png';
import search from './asset/images/Search.png'; 
import imdb from './asset/images/imdb.png'; 
import tomato from './asset/images/tomato.png';
import Playicon  from './asset/images/play.svg'; 
import Seemore from './asset/images/seemore.svg'; 
import Footer from './components/footer';
import MovieList from './components/Moviecard';

import axios from 'axios';

import { toast } from 'react-toastify';





function Logocomponent() {

  return (
    <div className='logo'>
      <img className='logo-pic' src={logo} alt=" logo" />
    </div>
  );
}




// function Icon() {
//   return (
//     <div className='search'>
//     <input className='btn-search' type='search' placeholder='What do you want to watch?'
// />
//     <img className='search-img' src={search}   alt="search SVG" />

//     </div>
//   );
// }

function Imdbicon() {
  return (
    <div>
    <img className='imdb-img' src={imdb}  alt="search SVG" />

    </div>
  );
}

function MenuIcon() {
  return (
    <div>
    <img className='menu' src={Menu}  alt="search SVG" />

    </div>
  );
}

function SeeMore() {
  return (
    <div>
    <img className='play-img' src={Seemore}  alt="search SVG" />

    </div>
  );
}

function PlayIcon() {
  return (
    <div>
    <img className='play-img' src={Playicon}  alt="search SVG" />

    </div>
  );
}

function Tomatoicon() {
  return (
    <div>
    <img className='tomato-img' src={tomato}  alt="search SVG" />

    </div>
  );
}

function MyButton() {
  return (
    <button className='btnheader'>
      <PlayIcon className='play-icon' /> Watch trailer
    </button>
  );
}



function Home() {

    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showMovieList, setShowMovieList] = useState(true);
    const title = showMovieList ? "Featured" : "Search Results";

    const handleSearch = async () => {
        try {
          const apiKey = '523c8b46aafc35c66f9fd4323369516c';
          const response = await axios.get(
            `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&api_key=${apiKey}`
          );
          setSearchResults(response.data.results);
          setShowMovieList(false);
        } catch (error) {
          console.error('Error searching for movies:', error);
          toast.error('Oops! No Movies Found');
        }
      };
      useEffect(() => {
        // Reset the movie list and show it when there's no search query
        if (searchQuery === "") {
          setShowMovieList(true);
          setSearchResults([]);
        }
      }, [searchQuery]);
  return (
    
    <div className='App1'>
     
     <header className='head-section'>
   <nav>
   <div className='logo'>
    <Logocomponent/>
    </div>


    <div className='search'>
    <input className='btn-search' type='search' placeholder='What do you want to watch?'
      onChange={(e) => setSearchQuery(e.target.value)}
      value={searchQuery}
      name=""
        />
    <img className='search-img' src={search} onClick={handleSearch}  alt="search SVG" />
    </div>


    <div className='sign-box'>
      <h2>Sign In</h2>
      <MenuIcon/>
    </div>
   </nav>


   <div id='moviedetail-pagination'>
   <div id='discription-box'>
   <h1 className='movietittle'>John Wick 3 : Parabellum</h1>

    <div className='rating'>

      <div className='imdb-icon'>
    <Imdbicon/>
    <p>86.0/100</p>
      </div>
      <div className='tomato-icon'>
    <Tomatoicon />
    <p>97%</p>
      </div>
    </div>
    <p className='moviedetailsheader'>John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
    <MyButton />
   </div>
 
    <div id='pagination'>
      <ul>
        <li className='q1'>1</li>
        <li className='q2'>2</li>
        <li className='q3'>3</li>
        <li className='q4'>4</li>
        <li className='q5'>5</li>
      </ul>
    </div>
   </div>
     </header>

    <div className='featured-explore'>
      <div className='featured'>
        <p>{title}</p>
      </div>

      <div >
        <a href='#' className='seemore'>
        <p>See more</p>
        <SeeMore />
        </a>
      </div>
    </div>
    {showMovieList ? (
        <MovieList title={title} /> // Pass the title as a prop
      ) : (
        searchResults.length > 0 && (
          <div>
            <MovieList title={title} searchResults={searchResults} /> {/* Pass the title as a prop */}
          </div>
        )
      )}



{/* {showMovieList ? (
        <MovieList />
      ) : (
        searchResults.length > 0 && (
          <div className='featured'>
            <p>{title}</p>
            <MovieList searchResults={searchResults} />
          </div>
        )
      )} */}

   <br/>
<Footer/>
    </div>
  );
}

export default Home;
