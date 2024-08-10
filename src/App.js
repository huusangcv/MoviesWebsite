import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Layout/Header";
import "./sass/main.scss";
import Footer from "./components/Layout/Footer";
import Movies from "./pages/Movies";
import { useEffect, useState } from "react";
import MoviesApi from "./api/moviesApi";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NewMovies from "./pages/NewMovies";

function App() {
    return (
        <div className="app-container">
            <Routes>
                <Route path="/MoviesWebsite" element={<Layout />}>
                    {/* <Route index element={<Home />} />
                    <Route path="blogs" element={<Blogs />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<NoPage />} /> */}
                    {/* <Route index element={<Home />} /> */}
                    <Route index element={<Home />} />
                    {/* <Route path="phim-moi-cap-nhat" element={<NewMovies />} /> */}
                </Route>
            </Routes>
        </div>
    );
}

export default App;
