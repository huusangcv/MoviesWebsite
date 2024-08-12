import { useEffect, useState } from "react";
import MoviesApi from "../api/moviesApi";
import { useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";

const MoviesSearch = () => {
    const [moviesSearch, setMoviesSearch] = useState([]);
    const [page, setPage] = useState(1);
    const pageCount = moviesSearch?.paginate?.total_page;
    const [keyword, setKeyword] = useState("");
    const nagivate = useNavigate();
    useEffect(() => {
        const fecthMovies = async () => {
            try {
                const params = { keyword: keyword, page: page };
                const response = await MoviesApi.getMoviesSearch(params);
                setMoviesSearch(response);
            } catch (error) {
                console.log("Faild to fetch movies", error);
            }
        };
        window.scrollTo({
            top: 0,
        });
        fecthMovies();
    }, [keyword, page]);

    if (!moviesSearch) {
        return <div>Loading...</div>;
    }

    const handleSearchInput = (e) => {
        setKeyword(e.target.value);
    };

    const handlePageClick = (event) => {
        setPage(event.selected);
    };

    return (
        <div className="container">
            <div class="input-group">
                <div class="form-outline" data-mdb-input-init>
                    <input
                        type="search"
                        id="form1"
                        className="form-control"
                        placeholder="Tìm kiếm phim..."
                        onChange={(e) => handleSearchInput(e)}
                    />
                </div>
            </div>
            <div className="row row-cols-xxl-5 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-4">
                {moviesSearch?.items?.map((movie, index) => {
                    return (
                        <div className="col" key={movie.slug}>
                            <a
                                href=""
                                className="card"
                                onClick={() =>
                                    nagivate(
                                        `/MoviesWebsite/movie/${movie.slug}`
                                    )
                                }
                            >
                                <div className="card-poster">
                                    <img
                                        src={movie.thumb_url}
                                        className="card-img-top"
                                        alt="..."
                                    />
                                </div>

                                <div className="card-body">
                                    <h5 className="card-title">{movie.name}</h5>
                                    <p className="card-text">
                                        {movie.original_name}
                                    </p>
                                </div>
                            </a>
                        </div>
                    );
                })}
            </div>
            <div className="paginate">
                <ReactPaginate
                    nextLabel="Trang kế >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={pageCount}
                    previousLabel="< Trang trước"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                    forcePage={page}
                />
            </div>
        </div>
    );
};

export default MoviesSearch;
