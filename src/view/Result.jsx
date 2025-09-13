import React, { useContext } from 'react'
import { StoreContext } from '../context/Store.jsx'

const Result = () => {
  const { movies, notFound } = useContext(StoreContext)

  if(!movies.Title && !notFound){
    return null
  }

  if (notFound || !movies.Title) {
    return <h1 className='text-black m-auto text-[4rem] font-bold flex items-center justify-center mt-[350px]'>Movie not found</h1>
  }
  
  

  return (

    <div className='p-[10px] md:p-[40px] xl:p-[40px]'>
      <div className='w-full h-[auto] bg-black text-white flex flex-col md:flex-row p-4 md:p-10'>
        <div className='h-[50vh] w-[60vw] flex justify-center items-center xl:w-[35vw] md:h-[70vh] xl:h-[70vh]'>
          <img src={movies.Poster} alt={movies.Title} className='w-full h-full rounded-lg shadow-lg' />
        </div>
        <div className='ml-[20px] md:ml-[50px] xl:ml-[50px]'>
          <div className='flex justify-between items-center mb-4'>
            <h1 className='text-4xl font-bold mb-4 inline-block'>{movies.Title}</h1>
            <p className='mb-2 inline text-[1.5rem] ' ><span>⭐</span>{movies.imdbRating}</p>
          </div>
          <p className='mb-2 text-[1rem] text-gray-400 font-semibold'>{movies.Plot}</p>
          <hr></hr>
          <div className='mb-4 mt-[30px] flex flex-col'>
            <p className='mb-2'><span className='font-semibold'>Year:</span> {movies.Year}</p>
            <p className='mb-2'><span className='font-semibold'>Rated:</span> {movies.Rated}</p>
            <p className='mb-2'><span className='font-semibold'>Released:</span> {movies.Released}</p>
            <p className='mb-2'><span className='font-semibold'>Runtime:</span> {movies.Runtime}</p>
            <p className='mb-2'><span className='font-semibold'>Genre:</span> {movies.Genre}</p>
            <p className='mb-2'><span className='font-semibold'>Director:</span> {movies.Director}</p>
            <p className='mb-2'><span className='font-semibold'>Writer:</span> {movies.Writer}</p>
            <p className='mb-2'><span className='font-semibold'>Actors:</span> {movies.Actors}</p>
            <p className='mb-2'><span className='font-semibold'>Plot:</span> {movies.Plot}</p>
          </div>
        </  div>
      </div>



    </div>
  )
}


export default Result
