import * as React from 'react';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { useRecoilState } from 'recoil';
import { modalState, movieState } from '@/atoms/modalState';
import { XIcon } from '@heroicons/react/outline';
import { Element, Genre, Movie } from '@/typings';
import ReactPlayer from 'react-player';
import MuiModal from '@mui/material/Modal'


export default function BasicModal() {
  const [open, setOpen] = useRecoilState(modalState)
  const [movie, setmovie] = useRecoilState<Movie | null>(movieState)
  const [trailer, setTrailer] = useState('')
  const [muted, setmuted] = useState(false)
  const [genres, setGenres] = useState<Genre[]>([])
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (!movie) return

    async function fetchMovie() {
      const data = await fetch(
        `https://api.themoviedb.org/3/${movie?.media_type === 'tv' ? 'tv' : 'movie'
        }/${movie?.id}?api_key=${process.env.NEXT_PUBLIC_API_KEY
        }&language=en-US&append_to_response=videos`
      )
        .then((response) => response.json())
        .catch((err) => console.log(err.message))

      if (data?.videos) {
        const index = data.videos.results.findIndex(
          (element: Element) => element.type === 'Trailer'
        )
        setTrailer(data.videos?.results[index]?.key)
      }
      if (data?.genres) {
        setGenres(data.genres)
      }
    }

    fetchMovie()
  }, [movie])
  return (
    <MuiModal
      open={open}
      onClose={handleClose}
      className="fixed bg-[#181818]  !top-7 left-0 right-0 z-50 mx-auto w-full max-w-5xl overflow-hidden overflow-y-scroll rounded-md scrollbar-hide"
    >

      <Box>
        <button
          onClick={handleClose}
          className="modalButton flex items-center justify-center absolute right-0 top-0 !z-40 h-9 w-9 border-none bg-[#2f2f2f] hover:bg-[#414040]"
        >
          <XIcon className="h-6 w-6" />
        </button>
           {trailer && <div className="relative pt-[56.25%]">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${trailer}`}
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: '0', left: '0' }}
            playing
            muted={muted}
          />
        </div>}
        <div className={`flex  space-x-16 rounded-b-md bg-[#181818] px-10 py-8 ${!trailer && '!pt-[25%]'}`}>
          <div className="space-y-6 text-lg">
            <div className="flex items-center space-x-2 text-sm">
              <p className="font-semibold text-green-400">
                {movie && movie.vote_average * 10}% Match
              </p>
              <p className="font-light">
                {movie?.release_date || movie?.first_air_date}
              </p>
              <div className="flex h-4 items-center justify-center rounded border border-white/40 px-1.5 text-xs">
                HD
              </div>
            </div>

            <div className="flex flex-col gap-x-10 gap-y-4 font-light md:flex-row">
              <p className="w-5/6 text-sm md:text-lg">{movie?.overview}</p>
              <div className="flex flex-col space-y-3 text-sm">
                <div>
                  <span className="text-[gray]">Genres: </span>
                  {genres.map((genre) => genre.name).join(', ')}
                </div>

                <div>
                  <span className="text-[gray]">Original language: </span>
                  {movie?.original_language}
                </div>

                <div>
                  <span className="text-[gray]">Total votes: </span>
                  {movie?.vote_count}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </MuiModal>
  );
}
