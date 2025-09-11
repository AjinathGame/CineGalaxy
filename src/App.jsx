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
      </Routes>
    </BrowserRouter>
  )
}

export default App



