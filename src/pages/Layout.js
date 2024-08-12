import { Outlet, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import MoviesApi from "../api/moviesApi";
import Header from "../components/Layout/Header";
import Movies from "./MoviesWatching";
import Footer from "../components/Layout/Footer";
const Layout = (props) => {
    // const [movieDetail, setMovieDetail] = useState([]);
    // const nagivate = useNavigate();
    // // useEffect(() => {
    // //     const fetchMovieDetail = async (slug) => {
    // //         try {
    // //             const response = await MoviesApi.getMovieDetail(slug);
    // //             console.log(response);
    // //             setMovieDetail(response);
    // //         } catch (error) {
    // //             console.log("Faild to fetch movies", error);
    // //         }
    // //     };
    // //     fetchMovieDetail();
    // // }, []);

    return (
        <>
            <div className="app-container">
                <Header />
                <section className="movies">
                    <div className="movies__filter"></div>
                    <Outlet />
                </section>
                <Footer />
            </div>
        </>
    );
};

export default Layout;
