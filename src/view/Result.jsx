import React, { useContext, useState } from 'react'
import { StoreContext } from '../context/Store.jsx'

const Result = () => {
    const { movies } = useContext(StoreContext)
    console.log(movies)

  return (
    <div>
        hiii
      <h1>{movies.Title}</h1>
      <h1>{movies.Year}</h1>
      <h1>{movies.Rated}</h1>
      <h1>{movies.Released}</h1>
      <h1>{movies.Runtime}</h1>
      <h1>{movies.Genre}</h1>
    </div>
  )
}

export default Result
