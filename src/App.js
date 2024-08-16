import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Layout/Header";
import "./sass/main.scss";
import Footer from "./components/Layout/Footer";
import Movies from "./pages/MoviesWatching";
import { useEffect, useState } from "react";
import MoviesApi from "./api/moviesApi";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NewMovies from "./pages/NewMovies";
import NotFound from "./components/Notfound";
import MovieDetail from "./pages/MovieDetail";
import WatchMovie from "./pages/WatchMovie";
import SingleMovies from "./pages/SingleMovies";
import MovieSeries from "./pages/MovieSeries";
import MoviesWatching from "./pages/MoviesWatching";
import MoviesSearch from "./pages/MoviesSearch";
import MoviesType from "./pages/MoviesType";
import "./components/Auth/Login.scss";
import FAQ from "./pages/Faqs";
import Login from "./components/Auth/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <>
            <Routes>
                <Route path="/MoviesWebsite" element={<Layout />}>
                    {/* <Route index element={<Home />} />
                    <Route path="blogs" element={<Blogs />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<NoPage />} /> */}
                    {/* <Route index element={<Home />} /> */}
                    <Route index element={<Home />} />
                    <Route path="phim-moi-cap-nhat" element={<NewMovies />} />
                    <Route path="phim-le" element={<SingleMovies />} />
                    <Route path="phim-bo" element={<MovieSeries />} />
                    <Route
                        path="phim-dang-chieu"
                        element={<MoviesWatching />}
                    />
                    <Route path="type/:slug" element={<MoviesType />} />
                    <Route path="search" element={<MoviesSearch />} />
                    <Route path="movie/:slug" element={<MovieDetail />} />
                    <Route path="watch/:slug" element={<WatchMovie />} />
                    <Route path="faqs" element={<FAQ />} />
                    <Route path={"*"} element={<NotFound />} />
                </Route>
                <Route path="/login" element={<Login />} />
            </Routes>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    );
}

export default App;
