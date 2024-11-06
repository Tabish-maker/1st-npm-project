import React from 'react';

export default function Header() {
  return (
    <div className='flex justify-around flex-row bg-gray-200'>
      <img src='https://placehold.co/120x90' />
      <div className=''>
        <input className='border border-red-100' placeholder='Search...' />
        <button className=' border-1 border-black'>Search</button>
      </div>
    </div>
  );
}
