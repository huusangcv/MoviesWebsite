import { useEffect, useState } from "react";
import MoviesApi from "../api/moviesApi";
import { useNavigate } from "react-router-dom";

const SingleMovies = () => {
    const NodeCache = require("node-cache");
    const cache = new NodeCache({ stdTTL: 3600 }); // Thiết lập cache có thời gian sống là 1 giờ
    const [movie, setMovie] = useState(() => {
        if (cache.has("moviesSingle")) {
            const moviesSingle = cache.get("moviesSingle");
            return moviesSingle ?? [];
        }
    });
    const nagivate = useNavigate();
    const [page, setPage] = useState(1);
    useEffect(() => {
        const fecthMovies = async () => {
            try {
                const cacheKey = `movies_page_${page}`;
                let movies = cache.get(cacheKey);
                console.log(cacheKey);
                if (!movies) {
                    const params = { page: page };
                    const params2 = { page: page + 1 };
                    const [response1, response2] = await Promise.all([
                        MoviesApi.getMoviesSingle(params),
                        MoviesApi.getMoviesSingle(params2),
                    ]);

                    movies = [...response1.items, ...response2.items];
                    cache.set(cacheKey, movies);
                }

                setMovie((prev) => {
                    if (prev && prev.length > 0) {
                        const moviesSingle = [...prev, ...movies];
                        cache.set("moviesSingle", moviesSingle);
                        return moviesSingle;
                    } else {
                        cache.set("moviesSingle", movies);
                        return movies;
                    }
                });
            } catch (error) {
                console.log("Failed to fetch movies", error);
            }
        };
        let timer = setTimeout(() => {
            fecthMovies();
        }, 500);
        return () => clearTimeout(timer);
    }, [page]);

    const handlePageClick = (event) => {
        setPage(page + 2);
    };
    console.log(movie);
    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="container">
                <h2 className="movies__title">Phim lẻ</h2>
                <div className="horizontal"></div>
                <div className="row row-cols-xxl-5 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-4">
                    {movie?.map((movie, index) => {
                        return (
                            <div className="col" key={movie.slug}>
                                <div
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
                                        <h5 className="card-title">
                                            {movie.name}
                                        </h5>
                                        <p className="card-text">
                                            {movie.original_name}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="d-flex justify-content-center">
                    <button
                        className="btn-login btn-primay btn-load-more"
                        onClick={handlePageClick}
                    >
                        Xem thêm
                    </button>
                </div>
            </div>
        </>
    );
};

export default SingleMovies;
