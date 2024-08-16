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
import SliderComponent from "../components/SilderComponents/SliderComponent";
const Home = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [movieNew, setMovieNew] = useState([]);
    const [movieSlug, setMovieSlug] = useState([]);
    // // const nagivate = useNavigate();
    // useEffect(() => {
    //     const fecthMovies = async () => {
    //         try {
    //             const params = { page: 1 };
    //             const response = await MoviesApi.getMovieNew(params);
    //             setMovieNew(response);
    //         } catch (error) {
    //             console.log("Faild to fetch movies", error);
    //         }
    //     };
    //     window.scrollTo({
    //         top: 0,
    //     });
    //     fecthMovies();
    //     const timer = setTimeout(() => {
    //         setIsLoading(false);
    //     }, 3000); // 2 seconds delay

    //     return () => clearTimeout(timer);
    // }, []);
    setTimeout(() => {
        setIsLoading(false);
    }, 3000);

    return (
        <>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <>
                    <SliderComponent />
                </>
            )}
        </>
    );
};

export default Home;
