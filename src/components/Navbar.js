import React from 'react'
import { Link } from 'react-router-dom'
import {UserAuth} from '../context/AuthContext'

export const Navbar = () => {
  const {user, logOut} = UserAuth()
  console.log(user)
  return (
    <div className='flex items-center justify-between p-4 w-full absolute z-[100]'>
      <Link to='/'>
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">NETFLIX</h1>
      </Link>
      <div>
      <Link to='/login'>
          <button className='pr-4 text-white'>Sign In</button>
      </Link>
      <Link to='/signup'>
          <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Sign Up</button>
      </Link>
      </div>
    </div>
  )
}
