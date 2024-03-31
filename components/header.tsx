import React, { useEffect, useState } from 'react';
import { BellIcon, SearchIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import SearchMovies from './SearchMovies';
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
      <div className='flex space-x-5'>
        <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />
        <ul className=' hidden space-x-2 md:space-x-4 md:flex'>
          <li className='headerLink'>Home</li>
          <li className='headerLink'>Tv shows</li>
          <li className='headerLink'>Movies</li>
          <li className='headerLink'>New and popular</li>
          <li className='headerLink'>My list</li>
        </ul>
      </div>
      <div className='flex items-center space-x-3'>

   
      <SearchMovies/>
       
        <span className='text-sm cursor-pointer'>Kids</span>
        <BellIcon className=' md:inline w-5 h-5 cursor-pointer' />
        <Link href="/account">
          <img
            src="https://rb.gy/g1pwyx"
            alt=""
            className="cursor-pointer rounded w-6 h-6"
          />
        </Link>
      </div>

    </header>
  );
};

export default Header;