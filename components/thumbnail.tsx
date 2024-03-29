import { baseUrl, imageUrl } from '@/constants/movie';
import { Movie } from '@/typings';
import Image from 'next/image';
import React, { Key } from 'react';

interface Props{
    key:string | Key,
    movie:Movie
}

const Thumbnail = ({key,movie}:Props) => {
    return (
        <div className='  relative h-28 min-w-[150px] md:min-w-[250px] space-x-3 '>
         
             <Image

        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
        alt='Movie'
      />
        </div>
    );
};

export default Thumbnail;