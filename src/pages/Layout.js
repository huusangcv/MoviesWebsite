import { Outlet, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import MoviesApi from "../api/moviesApi";
import Header from "../components/Layout/Header";
import Movies from "./MoviesWatching";
import Footer from "../components/Layout/Footer";
import { ToastContainer } from "react-toastify";
const Layout = (props) => {
    const [showSearchButton, setShowSearchButton] = useState(true);
    const [showButtonDropdown, setButtonDropdown] = useState(true);
    // const handleShowBtnSearch = () => {
    //     setShowSearchButton(false);
    // };
    // const handleShowBtnDropdown = () => {
    //     setButtonDropdown(false);
    // };
    return (
        <>
            <div className="app-container">
                <Header
                    showSearchButton={showSearchButton}
                    setShowSearchButton={setShowSearchButton}
                    showButtonDropdown={showButtonDropdown}
                    setButtonDropdown={setButtonDropdown}
                />
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
