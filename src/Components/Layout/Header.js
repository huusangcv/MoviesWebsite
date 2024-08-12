import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Form, NavLink, useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import movieGenres from "../MovieGenresList";
import movieGenresNations from "../MoviesGenresListNations";
import movieYears from "../MoviesGenresListYears";
const Header = () => {
    const [showSearchButton, setShowSearchButton] = useState(true);
    const nagivate = useNavigate();
    const handleShowBtnSearch = () => {
        setShowSearchButton(false);
    };

    return (
        <header className="header">
            <Navbar expand="lg" className="nav-bar">
                <Navbar.Brand href="/MoviesWebsite" className="logo">
                    <span className="logo__name">Movies</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink
                            className="nav-link"
                            to="/MoviesWebsite/phim-le"
                        >
                            <span className="nav-link__name">Phim lẻ</span>
                        </NavLink>
                        <NavLink
                            className="nav-link"
                            to="/MoviesWebsite/phim-bo"
                        >
                            <span className="nav-link__name">Phim bộ</span>
                        </NavLink>

                        <NavLink
                            className="nav-link"
                            to="/MoviesWebsite/phim-dang-chieu"
                        >
                            <span className="nav-link__name">
                                Phim đang chiếu
                            </span>
                        </NavLink>

                        <NavDropdown
                            id="basic-nav-dropdown"
                            title={
                                <span className="nav-link__name">Thể loại</span>
                            }
                        >
                            {movieGenres.map((movieGenre) => {
                                return (
                                    <NavDropdown.Item key={movieGenre.id}>
                                        <div
                                            onClick={() =>
                                                nagivate(
                                                    `/MoviesWebsite/type/${movieGenre.slug}`
                                                )
                                            }
                                        >
                                            {movieGenre.label}
                                        </div>
                                    </NavDropdown.Item>
                                );
                            })}
                        </NavDropdown>

                        <NavDropdown
                            id="basic-nav-dropdown"
                            title={
                                <span className="nav-link__name">Quốc gia</span>
                            }
                        >
                            {movieGenresNations.map((movieGenresNation) => {
                                return (
                                    <NavDropdown.Item
                                        key={movieGenresNation.id}
                                    >
                                        <div
                                            onClick={() =>
                                                nagivate(
                                                    `/MoviesWebsite/type/${movieGenresNation.slug}`
                                                )
                                            }
                                        >
                                            {movieGenresNation.label}
                                        </div>
                                    </NavDropdown.Item>
                                );
                            })}
                        </NavDropdown>
                        <NavDropdown
                            id="basic-nav-dropdown"
                            title={<span className="nav-link__name">Năm</span>}
                        >
                            {movieYears.map((movieYear) => {
                                return (
                                    <NavDropdown.Item key={movieYear.id}>
                                        <div
                                            onClick={() =>
                                                nagivate(
                                                    `/MoviesWebsite/type/${movieYear.slug}`
                                                )
                                            }
                                        >
                                            {movieYear.label}
                                        </div>
                                    </NavDropdown.Item>
                                );
                            })}
                        </NavDropdown>
                        <NavLink
                            className="nav-link"
                            to="/MoviesWebsite/phim-dang-chieu"
                        >
                            <span className="nav-link__name">FAQs</span>
                        </NavLink>
                    </Nav>
                    <Nav>
                        {showSearchButton && (
                            <NavLink
                                className="nav-link"
                                to="/MoviesWebsite/search"
                                onClick={() => {
                                    handleShowBtnSearch();
                                }}
                            >
                                <span className="nav-link__search">
                                    <IoSearch />
                                    Tìm kiếm
                                </span>
                            </NavLink>
                        )}
                    </Nav>
                    <Nav>
                        <>
                            <button
                                className="btn-login btn "
                                onClick={() => {
                                    nagivate("/login");
                                }}
                            >
                                Đăng nhập
                            </button>
                        </>
                        {/* <NavDropdown
                            id="basic-nav-dropdown"
                            title={
                                <span className="nav-link__name">Hữu Sang</span>
                            }
                        >
                            <NavDropdown.Item>Profile</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>Logout</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
};

export default Header;
