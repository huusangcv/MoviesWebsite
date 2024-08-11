import { useEffect, useState } from "react";
import MoviesApi from "../api/moviesApi";
import { useNavigate } from "react-router-dom";

const MoviesSearch = () => {
    const [moviesSearch, setMoviesSearch] = useState([]);
    const [keyword, setKeyword] = useState("");
    const nagivate = useNavigate();
    useEffect(() => {
        const fecthMovies = async () => {
            try {
                const params = { keyword: keyword };
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
    }, [keyword]);

    if (!moviesSearch) {
        return <div>Loading...</div>;
    }

    const handleSearchInput = (e) => {
        setKeyword(e.target.value);
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
        </div>
    );
};

export default MoviesSearch;
