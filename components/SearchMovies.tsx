import React, { useState } from 'react';
import axios from 'axios';
import { SearchIcon } from '@heroicons/react/solid';
import { useRecoilState } from 'recoil';
import { allMovies, movieState } from '@/atoms/modalState';

const SearchMovies: React.FC = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useRecoilState(allMovies)

  const searchMovies = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
      );
      setMovies(response.data.results);
      setQuery('')

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)

  };



  return (
    <div>
      <div className="searchMovieBox hidden md:inline-block ">
               <input type="search" id="search" placeholder="Search Movies..." value={query}
          onChange={handleChange} />
           <span className="icon"><SearchIcon className=' w-5 h-5 cursor-pointer' onClick={searchMovies} /></span>
      </div>



    </div>
  );
};

export default SearchMovies;
