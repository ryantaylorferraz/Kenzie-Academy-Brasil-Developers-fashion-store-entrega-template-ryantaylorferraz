import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

const MovieContext = createContext({})

export const MovieProvider = ({children}) => {
    const [listMovie, setListMovie] = useState([])
    const [movieOne, setMovieOne] = useState([])


    useEffect(() => {
        const getMovie = async () => {
            try {
                const { data } = await api.get("/movies")
                setListMovie(data)
            } catch (error) {
                console.log(error)
            }
        };
        getMovie()

    }, [])




    return (
        <MovieContext.Provider value={{listMovie, setListMovie, setMovieOne, movieOne}}>
            {children}
        </MovieContext.Provider>
    )
}

export const useMovieContext = () => useContext(MovieContext)