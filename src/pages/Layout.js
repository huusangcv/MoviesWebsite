import { Outlet, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import MoviesApi from "../api/moviesApi";
import Header from "../components/Layout/Header";
import Movies from "./Movies";
import Footer from "../components/Layout/Footer";
const Layout = (props) => {
    const [movieDetail, setMovieDetail] = useState([]);
    const nagivate = useNavigate();
    useEffect(() => {
        const fetchMovieDetail = async (slug) => {
            try {
                const response = await MoviesApi.getMovieDetail(slug);
                console.log(response);
                setMovieDetail(response);
            } catch (error) {
                console.log("Faild to fetch movies", error);
            }
        };
        fetchMovieDetail();
    }, []);

    return (
        <>
            <Header />
            <section className="movies">
                <Outlet />
            </section>
            <Footer />
        </>
    );
};

export default Layout;
