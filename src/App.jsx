import React from 'react'
import Movies from './view/Movies'
import Result from './view/Result'
import { BrowserRouter, Route, Routes} from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Movies />} />
        <Route path='/result' element={<Result />} />
        <Route path='*' element={<h1 className='text-black m-auto text-[4rem] font-bold flex items-center justify-center mt-[350px]'>Page not found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App



