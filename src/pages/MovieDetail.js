import { useEffect, useLayoutEffect, useState } from "react";
import MoviesApi from "../api/moviesApi";
import { useNavigate, useParams } from "react-router-dom";
import { FaPlay } from "react-icons/fa";

const MovieDetail = (props) => {
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
        fetchMovie();
        window.scrollTo({
            top: 0,
        });
    }, [slug]);

    if (!movie) {
        return <div>Loading...</div>;
    }

    const dateObject = new Date(movie.created);

    // Lấy ra các thông tin ngày tháng năm
    const day = dateObject.getDate().toString().padStart(2, "0");
    const month = (dateObject.getMonth() + 1).toString().padStart(2, "0");
    const year = dateObject.getFullYear();

    // Định dạng ngày tháng năm theo định dạng "12/03/2024"
    const formattedDate = `${month}/${day}/${year}`;

    return (
        <>
            <div className="MovieDetail">
                <div className="container">
                    <div className="MovieDetail__info">
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
                                    (
                                    {movie &&
                                        movie.modified &&
                                        new Date(movie.modified).getFullYear()}
                                    )
                                </span>
                            </h3>
                            <p className="MovieDetail__time">
                                <span>
                                    {(movie.time && movie.time) || "Full 1 tập"}
                                </span>
                                <span className="MovieDetail__quality">
                                    {movie.quality}
                                </span>
                            </p>
                            <div className="MovieDetail__manufacture">
                                <div className="MovieDetail__row">
                                    <div className="MovieDetail__dt">
                                        ĐẠO DIỄN
                                    </div>
                                    <div className="MovieDetail__dd">
                                        {(movie.director && movie.director) ||
                                            "Actor"}
                                    </div>
                                </div>
                                <div className="MovieDetail__row">
                                    <div className="MovieDetail__dt">
                                        QUỐC GIA
                                    </div>
                                    <div className="MovieDetail__dd">
                                        {movie.category[4].list[0].name}
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
                                <div className="MovieDetail__row MovieDetail__row--current">
                                    <div className="MovieDetail__dt">
                                        KHỞI CHIẾU
                                    </div>
                                    <div className="MovieDetail__dd ">
                                        {formattedDate}
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
        </>
    );
};

export default MovieDetail;
