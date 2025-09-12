import React, { createContext, useState } from "react"
import axios from "axios"

const StoreContext = createContext()

const StoreProvider = ({ children }) => {
    const [movies, setMovies] = useState({})
    const [input, setInput] = useState("")
    const [notFound, setNotFound] = useState(false)

    const loadData = async ({ movie }) => {
        try {
            let result = await axios.get(`https://www.omdbapi.com/?apikey=bc101634&t=${movie}`)
            setMovies(result.data)
            console.log(result.data)
            if (result.data.Response === "False") {
                setNotFound(true)

            } else {
                setNotFound(false)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <StoreContext.Provider value={{ movies, setMovies, input, setInput, notFound, setNotFound, loadData }}>
            {children}
        </StoreContext.Provider>
    )
}

export { StoreContext, StoreProvider }