import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import MoviesApi from "../api/moviesApi";
import Header from "../components/Layout/Header";
import Movies from "./Movies";
const Layout = (props) => {
    return (
        <>
            <Header />
            <section className="movies">
                <Outlet />
            </section>
        </>
    );
};

export default Layout;
