
import { modalState, movieState } from '@/atoms/modalState';
import { baseUrl } from '@/constants/movie';
import { Movie } from '@/typings';
import { InformationCircleIcon, PlayIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { useRecoilState } from 'recoil';

interface Props {
    netflixOriginals: Movie[]
}

const Banner = ({ netflixOriginals }: Props) => {
    const [movie, setMovie] = useState<Movie | null>(null);
    const [currentMovie,setCurrentMovie]=useRecoilState<Movie | null>(movieState)
    const [open, setOpen] =useRecoilState(modalState);
    useEffect(() => {
        if (netflixOriginals !== undefined) {
            setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals?.length)])
        }
 
    },[])
    // image.tmdb.org
    return (
        <div className=" flex flex-col space-y-2 py-16 md:space-y-4 lg:justify-end lg:pb-12 gradient-to-b">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-full">
        <Image
        alt='Movie'
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          layout="fill"
          objectFit="cover"
        />
      </div>

    <div className='py-2  '>
    <h1 className="py-4 text-2xl font-bold md:text-4xl lg:text-6xl">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className="max-w-xs  text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl ">
        {movie?.overview}
      </p>

      <div className="flex space-x-3  py-6">
        <button className="bannerButton bg-white text-black" 
           onClick={() => {
            setOpen(true);
            setCurrentMovie(movie)
          }}
        >
          <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" /> Play
        </button>
        <button
          className="bannerButton bg-[gray]/70"
          onClick={() => {
            setOpen(true);
            setCurrentMovie(movie)
          }}
        >
          More Info <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8" />
        </button>
      </div>
        </div>
    </div>
    );
};

export default Banner;
