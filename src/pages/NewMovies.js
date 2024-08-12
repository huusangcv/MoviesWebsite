import { useEffect, useState } from "react";
import MoviesApi from "../api/moviesApi";
import { useNavigate } from "react-router-dom";
import { Pagination } from "react-bootstrap";

const NewMovies = () => {
    const [movieNew, setMovieNew] = useState([]);

    const nagivate = useNavigate();
    useEffect(() => {
        const fecthMovies = async () => {
            try {
                const params = { page: 1 };
                const response = await MoviesApi.getMovieNew(params);
                setMovieNew(response);
            } catch (error) {
                console.log("Faild to fetch movies", error);
            }
        };
        window.scrollTo({
            top: 0,
        });
        fecthMovies();
    }, []);

    if (!movieNew) {
        return <div>Loading...</div>;
    }
    return (
        <div className="container">
            <h2 className="movies__title">Phim mới</h2>
            <div className="horizontal"></div>
            <div className="row row-cols-xxl-5 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-4">
                {movieNew?.items?.map((movie, index) => {
                    return (
                        <div className="col" key={movie.slug}>
                            <a
                                href="#!"
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
        </div>
    );
};

export default NewMovies;
