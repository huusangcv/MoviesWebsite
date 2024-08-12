import { useEffect, useState } from "react";
import MoviesApi from "../api/moviesApi";
import { useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";

const MovieSeries = () => {
    const [movieNew, setMovieNew] = useState([]);
    const nagivate = useNavigate();
    const [page, setPage] = useState(1);
    const pageCount = +movieNew?.paginate?.total_page;
    useEffect(() => {
        const fecthMovies = async () => {
            try {
                const params = { page: +page };
                const response = await MoviesApi.getMovieSeries(params);
                setMovieNew(response);
            } catch (error) {
                console.log("Faild to fetch movies", error);
            }
        };
        fecthMovies();
        window.scrollTo(0, 0);
    }, [page]);
    console.log(page);
    const handlePageClick = (event) => {
        setPage(event.defaultValue + 1);
    };

    if (!movieNew) {
        return <div>Loading...</div>;
    }
    return (
        <div className="container">
            <h2 className="movies__title">Phim bộ</h2>
            <div className="horizontal"></div>
            <div className="row row-cols-xxl-5 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-4">
                {movieNew?.items?.map((movie, index) => {
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
            </div>{" "}
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
                    forcePage={page - 1}
                />
            </div>
        </div>
    );
};

export default MovieSeries;
