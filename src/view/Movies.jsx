import React, {  useContext } from 'react'
import Moviesposter from '../assets/movie-poster.png'
import {Link} from 'react-router-dom'
import { StoreContext } from '../context/Store.jsx'

const Movies = () => {


   const {  input, setInput ,loadData } = useContext(StoreContext)

  return (
    <>
        
        <div className='w-full h-screen relative overflow-x-hidden bg-black flex justify-center items-center'>
        <img src={Moviesposter} className='w-full h-full object-cover'/>
        <div className='absolute top-0 left-0 w-full h-full bg-black/70 backdrop-blur-sm'></div>
        <div className='absolute top-0  w-full h-full flex flex-col justify-center items-center text-white xl:ml-[600px]  text-center px-4'>
          <h1 className='text-white text-4xl md:text-5xl font-bold'>🍿 Welcome to <span className='text-red-500'>CineGalaxy</span></h1>
          <p className='text-white text-xl md:text-2xl font-bold mt-4'>Watch anywhere. Cancel anytime.</p>
          <button className='mt-6 bg-red-600 hover:bg-red-700 text-white font-bold py-2 cursor-pointer px-4 rounded'>Get Started</button>  
        </div>
        <div className='absolute w-[80vw] md:w-[60vw] lg:w-[40vw] xl:w-[40vw] flex justify-center items-center px-4 p-3 rounded-full bottom-10 bg-gray-600 '>
          <input type="text" placeholder='Search for movies, TV shows...' className='w-full h-12 p-2 pl-4 rounded-full bg-white outline-none text-black inline' value={input} onChange={(e)=>setInput(e.target.value)}/>
          <Link to='/result'>
            <button className='ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer ' onClick={()=>loadData({ movie: input })}>Search</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Movies
