import { modalState, movieState } from '@/atoms/modalState';
import { Movie } from '@/typings';
import Image from 'next/image';
import React, { Key } from 'react';
import { useRecoilState } from 'recoil';

interface Props {
  key: string | Key,
  movie: Movie
}

const Thumbnail = ({ key, movie }: Props) => {
  const [currentMovie,setCurrentMovie]=useRecoilState<Movie | null>(movieState)
  const [open, setOpen] =useRecoilState(modalState);
  return (
    <div
    key={movie?.id}
      className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105"
      onClick={() => { 
        setCurrentMovie(movie)
        setOpen(true)
      }}
    >
      <Image
      alt='Movie'
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
      />
    </div>
  );
};

export default Thumbnail;
