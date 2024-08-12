import { useEffect, useLayoutEffect, useState } from "react";
import MoviesApi from "../api/moviesApi";
import { useNavigate, useParams } from "react-router-dom";
import { FaPlay } from "react-icons/fa";

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
    console.log(nameOf2024);
    // for (const groupKey in category) {
    //     const group = category[groupKey];
    //     console.log(`Nhóm ${group}:`);

    //     // Duyệt qua các phần tử trong danh sách
    //     // for (const item of group.list) {
    //     //     console.log(`- ${item.name} (ID: ${item.id})`);
    //     // }

    //     // console.log();
    // }

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="MovieDetail__poster">
                <img
                    src={movie.poster_url}
                    alt=""
                    className="MovieDetail__poster-img"
                />
            </div>
            <div className="MovieDetail">
                <div className="container">
                    <div className="MovieDetail__info">
                        <div className="MovieDetail__absolute">
                            {" "}
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
                                </p>
                                <div className="MovieDetail__manufacture d-flex justify-content-between align-items-end">
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
                                                {
                                                    movie?.category[4]?.list[0]
                                                        .name
                                                }
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
                                    <div className="MovieDetail__row row-round">
                                        {movie?.category["1"]?.list.map(
                                            (item) => {
                                                return (
                                                    <div className="MovieDetail__dd dd-rounded">
                                                        {item.name}
                                                    </div>
                                                );
                                            }
                                        )}
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
        </>
    );
};

export default MovieDetail;
