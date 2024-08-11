import { useState } from "react";
import { ButtonGroup, FormControl } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Form, NavLink, useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
const Header = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const nagivate = useNavigate();
    const handleSearch = (event) => {
        const term = event.target.value;
        setSearchTerm(term);
        // Gọi API để tìm kiếm phim dựa trên searchTerm và lưu kết quả vào searchResults
        // fetchMoviesBySearchTerm(term).then((results) => {
        //     setSearchResults(results);
        // });
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
                    </Nav>
                    <Nav>
                        <NavLink
                            className="nav-link"
                            to="/MoviesWebsite/search"
                        >
                            <span className="nav-link__search">
                                <IoSearch />
                                Tìm kiếm
                            </span>
                        </NavLink>
                    </Nav>
                    <Nav>
                        <NavDropdown
                            id="basic-nav-dropdown"
                            title={
                                <span className="nav-link__name">Hữu Sang</span>
                            }
                        >
                            <NavDropdown.Item>Profile</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
};

export default Header;
