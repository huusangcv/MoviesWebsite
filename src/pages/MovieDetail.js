import { useEffect, useLayoutEffect, useState } from "react";
import MoviesApi from "../api/moviesApi";
import { useNavigate, useParams } from "react-router-dom";
import { FaPlay, FaFacebookF } from "react-icons/fa";
const MovieDetail = (props) => {
    const { slug } = useParams();
    const [movie, setMovie] = useState(null);
    const [category, setCategory] = useState({});
    const nagivate = useNavigate();
    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await MoviesApi.getMovieDetail(slug);
                setMovie(response.movie);
                setCategory(response.movie.category);
            } catch (error) {
                console.error("Error fetching movie:", error);
            }
        };
        fetchMovie();
        window.scrollTo({
            top: 0,
        });
    }, [slug]);

    const nameOf2024 = category["3"]?.list[0]?.name;

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="MovieDetail__poster">
                <img
                    src={movie?.poster_url}
                    alt=""
                    className="MovieDetail__poster-img"
                />
            </div>
            <div className="MovieDetail">
                <div className="container">
                    <div className="MovieDetail__info">
                        <div className="MovieDetail__absolute">
                            <div>
                                <img
                                    src={movie.thumb_url}
                                    alt=""
                                    className="MovieDetail__image-bg"
                                />
                                <button
                                    className="MovieDetail__watch-now"
                                    onClick={() =>
                                        nagivate(
                                            `/MoviesWebsite/watch/${movie.slug}`
                                        )
                                    }
                                >
                                    <FaPlay /> <span>Xem ngay</span>
                                </button>
                            </div>
                            <div className="MovieDetail__content">
                                <h2 className="MovieDetail__title">
                                    {movie.original_name}
                                </h2>
                                <h3 className="MovieDetail__subtitle">
                                    <span> {movie.name}</span>
                                    <span className="MovieDetail__year">
                                        ({nameOf2024})
                                    </span>
                                </h3>
                                <p className="MovieDetail__time">
                                    <span>
                                        {(movie.time && movie.time) ||
                                            "Full 1 tập"}
                                    </span>
                                    <span className="MovieDetail__quality">
                                        {movie.quality}
                                    </span>

                                    <span>
                                        {/* {(movie.current_episode === "FULL" &&
                                            movie.current_episode) ||
                                            parseInt(
                                                movie.current_episode.replace(
                                                    "Tập ",
                                                    ""
                                                ) / movie.total_episodes
                                            )} */}
                                        {movie.current_episode}
                                    </span>
                                </p>

                                <div className="MovieDetail__manufacture d-flex justify-content-between align-items-end">
                                    <div>
                                        <div className="level-item">
                                            <a
                                                href="https://www.facebook.com/sharer/sharer.php?u=https://huusangcv.github.io/MoviesWebsite/"
                                                className="fb-share button is-link"
                                                target="_blank"
                                            >
                                                {/* <a href="https://www.facebook.com/sharer/sharer.php?u=https://xemphim.in/movie/despicable-me-4~45742" class="fb-share button is-link" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M448 80v352c0 26.5-21.5 48-48 48h-85.3V302.8h60.6l8.7-67.6h-69.3V192c0-19.6 5.4-32.9 33.5-32.9H384V98.7c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9H184v67.6h60.9V480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48z"></path></svg> Chia sẻ</a> */}
                                                <FaFacebookF />
                                                Chia sẻ
                                            </a>
                                        </div>
                                    </div>
                                    <div className="MovieDetail__row row-round">
                                        {movie?.category["1"]?.list &&
                                            movie?.category["1"]?.list?.map(
                                                (item) => {
                                                    return (
                                                        <div className="MovieDetail__dd dd-rounded">
                                                            {item.name}
                                                        </div>
                                                    );
                                                }
                                            )}
                                        {movie?.category["2"]?.list &&
                                            movie?.category["2"]?.list?.map(
                                                (item) => {
                                                    return (
                                                        <div className="MovieDetail__dd dd-rounded">
                                                            {item?.name}
                                                        </div>
                                                    );
                                                }
                                            )}
                                    </div>
                                </div>

                                <div className="MovieDetail__border-desc">
                                    <div>
                                        <div className="MovieDetail__row">
                                            <div className="MovieDetail__dt">
                                                ĐẠO DIỄN
                                            </div>
                                            <div className="MovieDetail__dd">
                                                {(movie.director &&
                                                    movie.director) ||
                                                    "Actor"}
                                            </div>
                                        </div>
                                        <div className="MovieDetail__row">
                                            <div className="MovieDetail__dt">
                                                QUỐC GIA
                                            </div>
                                            <div className="MovieDetail__dd">
                                                {movie?.category[
                                                    "4"
                                                ]?.list?.map((item) => {
                                                    return (
                                                        <span>
                                                            {item?.name}
                                                        </span>
                                                    );
                                                })}
                                            </div>
                                        </div>

                                        <div className="MovieDetail__row">
                                            <div className="MovieDetail__dt">
                                                DIỄN VIÊN
                                            </div>
                                            <div className="MovieDetail__dd">
                                                {movie.casts}
                                            </div>
                                        </div>
                                    </div>
                                    <p className="MovieDetail__desc">
                                        {movie.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MovieDetail;
