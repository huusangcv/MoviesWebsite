import Movies from "./Movies";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import MoviesApi from "../api/moviesApi";
const Home = () => {
    const [moviesWatching, setMoviesWatching] = useState([]);

    useEffect(() => {
        const fecthMovies = async () => {
            try {
                const params = { page: 1 };
                const response = await MoviesApi.getMovieWatching(params);
                setMoviesWatching(response);
            } catch (error) {
                console.log("Faild to fetch movies", error);
            }
        };
        fecthMovies();
    }, []);

    return (
        <>
            <Movies moviesWatching={moviesWatching} />
        </>
    );
};

export default Home;
