import { useNavigate } from "react-router-dom";

const Movies = (props) => {
    const { moviesWatching } = props;
    const nagivate = useNavigate();
    const handleClick = (movie, index) => {
        console.log("hi", movie.slug);
        nagivate("/MoviesWebsite/MovieDetail");
    };
    return (
        <div className="container">
            <h2 className="movies__title">{moviesWatching?.cat?.name}</h2>
            <div className="horizontal"></div>
            <div className="row row-cols-xxl-4 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-4">
                {moviesWatching?.items?.map((movie, index) => {
                    return (
                        <div className="col" key={index}>
                            <a
                                href="#!"
                                className="card"
                                onClick={() => handleClick(movie, index)}
                            >
                                <div className="card-poster">
                                    <img
                                        src={movie.poster_url}
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

export default Movies;
