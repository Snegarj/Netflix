import React from 'react';
import { BellIcon, SearchIcon } from '@heroicons/react/solid';
const Header = () => {
    return (
        <header className='flex items-center justify-between'>
            <div className='flex space-x-3'>
                <img
                    src="https://rb.gy/ulxxee"
                    width={100}
                    height={100}
                    className="cursor-pointer object-contain"
                />
                <ul className='flex  space-x-2 md:space-x-4 md:flex'>
                    <li className='headerLink'>Home</li>
                    <li className='headerLink'>Tv shows</li>
                    <li className='headerLink'>Movies</li>
                    <li className='headerLink'>New and popular</li>
                    <li className='headerLink'>My list</li>
                </ul>
            </div>
            <div className='flex items-center space-x-2'>
                <SearchIcon className=' md:inline w-5 h-5' />
                <span className='text-sm'>Kids</span>
                <BellIcon  className=' md:inline w-5 h-5'/>
            </div>

        </header>
    );
};

export default Header;