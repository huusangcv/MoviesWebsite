import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <Navbar expand="lg" className="nav-bar">
                <Navbar.Brand href="/MoviesWebsite" className="logo">
                    <span className="logo__name">Movies</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className="nav-link" to="/MoviesWebsite">
                            <span className="nav-link__name">Phim hot</span>
                        </NavLink>
                        <NavLink className="nav-link" to="/users">
                            <span className="nav-link__name">Phim lẻ</span>
                        </NavLink>
                        <NavLink className="nav-link" to="/admins">
                            <span className="nav-link__name">Phim bộ</span>
                        </NavLink>
                        <NavLink
                            className="nav-link"
                            to="/MoviesWebsite/phim-moi-cap-nhat"
                        >
                            <span className="nav-link__name">Phim mới</span>
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
                            <NavDropdown.Item>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
};

export default Header;
