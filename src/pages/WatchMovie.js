import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MoviesApi from "../api/moviesApi";
import { Button, ButtonToolbar } from "react-bootstrap";
import ReactPlayer from "react-player";

const WatchMovie = () => {
    const { slug } = useParams();
    const [movie, setMovie] = useState(null);

    const nagivate = useNavigate();

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await MoviesApi.getMovieDetail(slug);
                setMovie(response.movie);
            } catch (error) {
                console.error("Error fetching movie:", error);
            }
        };
        window.scroll(0, 0);
        fetchMovie();
    }, [slug]);

    const [defaultValueEpisode, setdefaultValueEpisode] = useState(0);
    const [defaultValueServer, setdefaultValueServer] = useState(0);

    const handleEpisodeChange = (index) => {
        setdefaultValueEpisode(index);
    };

    const handleServerChange = (index) => {
        setdefaultValueServer(index);
        setdefaultValueEpisode(0);
    };

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <div className="watch-movie">
            <div className="watch-movie__play">
                <iframe
                    allowFullScreen
                    src={
                        movie.episodes[defaultValueServer].items[
                            defaultValueEpisode
                        ].embed
                    }
                    className="watch-movie__iframe"
                ></iframe>

                <div className="container">
                    <div className="watch-movie__server">
                        <span>
                            {(movie.episodes.length === 2 &&
                                "ĐỔI SERVER (NẾU LƯỜI ĐỌC SUB)") ||
                                "SERVER"}
                        </span>
                        <div className="d-flex gap-3">
                            {movie.episodes.map((episode, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleServerChange(index)}
                                    className={
                                        (index === defaultValueServer &&
                                            "watch-movie__episodes-server active") ||
                                        "watch-movie__episodes-server"
                                    }
                                >
                                    <span> {episode.server_name}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="watch-movie__inner">
                        <div className="watch-movie__content">
                            <h2 className="watch-movie__title">{movie.name}</h2>
                            <h3 className="watch-movie__subtitle">
                                {movie.original_name}
                            </h3>
                        </div>

                        <div className="watch-movie__episodes">
                            <div className="watch-movie__episodes-btns">
                                {movie?.episodes[defaultValueServer]?.items.map(
                                    (item, index) => (
                                        <button
                                            key={index}
                                            onClick={() =>
                                                handleEpisodeChange(index)
                                            }
                                            className={
                                                (index ===
                                                    defaultValueEpisode &&
                                                    "watch-movie__episodes-btn active") ||
                                                "watch-movie__episodes-btn"
                                            }
                                            disabled={
                                                index === defaultValueEpisode &&
                                                true
                                            }
                                        >
                                            <span>Tập {item.name}</span>
                                        </button>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WatchMovie;
