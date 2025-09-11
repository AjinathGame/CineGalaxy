import React, { createContext, useState } from "react"
import axios from "axios"

const StoreContext = createContext()

const StoreProvider = ({ children }) => {
    const [movies, setMovies] = useState({})
    const [input, setInput] = useState("")

    const loadData = async ({ movie }) => {
        try {
            let result = await axios.get(`https://www.omdbapi.com/?apikey=bc101634&t=${movie}`)
            setMovies(result.data)
            console.log(result.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <StoreContext.Provider value={{ movies, setMovies, input, setInput, loadData }}>
            {children}
        </StoreContext.Provider>
    )
}

export { StoreContext, StoreProvider }