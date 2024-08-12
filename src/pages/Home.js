import Movies from "./MoviesWatching";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import MoviesApi from "../api/moviesApi";
import MoviesWatching from "./MoviesWatching";
import MovieSeries from "./MovieSeries";
import SingleMovies from "./SingleMovies";
import NewMovies from "./NewMovies";
const Home = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // 2 seconds delay

        return () => clearTimeout(timer);
    }, []);
    return (
        <>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <>
                    <NewMovies />
                </>
            )}
        </>
    );
};

export default Home;
