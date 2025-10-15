import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-between items-center bg-blue-800 px-[150px] py-6 text-amber-50'>
      <h1 className='text-3xl font-bold '>Logo</h1>

      <ul className='flex gap-8 text-weight-semibold text-lg cursor-pointer'>
        <li>Home</li>
        <li>About</li>
        <li>Service</li>
        <li>Contact Us</li>
      </ul>

    </div>
  )
}

export default Navbar
