import { useEffect, useState } from "react";
import MoviesApi from "../api/moviesApi";
import { useNavigate, useParams } from "react-router-dom";
import { Pagination } from "react-bootstrap";
import { PaginationControl } from "react-bootstrap-pagination-control";
import ReactPaginate from "react-paginate";

const MoviesType = () => {
    const [movie, setMovie] = useState([]);
    const [page, setPage] = useState(1);
    const nagivate = useNavigate();
    const { slug } = useParams();
    const [slugOld, setSlugOld] = useState(slug);
    const pageCount = +movie?.paginate?.total_page;

    useEffect(() => {
        const fecthMovies = async () => {
            try {
                const params = { page: +page };
                const response = await MoviesApi.getMoviesType(slug, params);
                setMovie(response);
                // setMovie(response);
            } catch (error) {
                console.log("Faild to fetch movies", error);
            }
        };
        window.scrollTo(0, 0);

        let timer = setTimeout(() => {
            fecthMovies();
        }, 300);

        return () => clearTimeout(timer);
    }, [page, slug]);

    const handlePageClick = (event) => {
        setPage(event.selected + 1);
    };

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="container">
                <div className="movie__filter">
                    <div className="row row-cols-xll-1 g-5">
                        <div className="col">
                            <div className="filter__group">
                                <h3 className="filter__title">Loại Phim</h3>
                                <select
                                    class="form-select form-select-lg mb-3"
                                    aria-label=".form-select-lg example"
                                >
                                    <option defaultValue>- Tất cả -</option>
                                    <option value="1">Phim lẻ</option>
                                    <option value="2">Phim bộ</option>
                                </select>
                            </div>
                        </div>
                        <div className="col">
                            <div className="filter__group">
                                <h3 className="filter__title">Thể loại:</h3>
                                <select
                                    class="form-select form-select-lg mb-3"
                                    aria-label=".form-select-lg example"
                                >
                                    <option defaultValue>- Tất cả -</option>
                                    <option value="action">Hành động</option>
                                    <option value="comedy">Hài hước</option>
                                    <option value="drama">Chính kịch</option>
                                    <option value="sci-fi">
                                        Khoa học viễn tưởng
                                    </option>
                                    <option value="horror">Kinh dị</option>
                                    <option value="romance">Tình cảm</option>
                                    <option value="documentary">
                                        Tài liệu
                                    </option>
                                    <option value="animation">Hoạt hình</option>
                                    <option value="thriller">Căng thẳng</option>
                                    <option value="adventure">Phiêu lưu</option>
                                    <option value="fantasy">Viễn tưởng</option>
                                    <option value="musical">Âm nhạc</option>
                                    <option value="war">Chiến tranh</option>
                                    <option value="biography">Tiểu sử</option>
                                    <option value="crime">Tội phạm</option>
                                </select>
                            </div>
                        </div>
                        <div className="col">
                            <div className="filter__group">
                                <h3 className="filter__title"> Quốc gia: </h3>
                                <select
                                    class="form-select form-select-lg mb-3"
                                    aria-label=".form-select-lg example"
                                >
                                    <option defaultValue>- Tất cả -</option>
                                    <option value="us">Hoa Kỳ</option>
                                    <option value="kr">Hàn Quốc</option>
                                    <option value="jp">Nhật Bản</option>
                                    <option value="cn">Trung Quốc</option>
                                    <option value="in">Ấn Độ</option>
                                    <option value="fr">Pháp</option>
                                    <option value="uk">Anh</option>
                                    <option value="de">Đức</option>
                                    <option value="it">Ý</option>
                                    <option value="es">Tây Ban Nha</option>
                                </select>
                            </div>
                        </div>
                        <div className="col">
                            <div className="filter__group">
                                <h3 className="filter__title">Năm:</h3>
                                <select
                                    class="form-select form-select-lg mb-3"
                                    aria-label=".form-select-lg example"
                                >
                                    <option defaultValue>- Tất cả -</option>
                                    <option value="2023">2024</option>
                                    <option value="2023">2023</option>
                                    <option value="2022">2022</option>
                                    <option value="2021">2021</option>
                                    <option value="2020">2020</option>
                                    <option value="2019">2019</option>
                                    <option value="2018">2018</option>
                                    <option value="2017">2017</option>
                                    <option value="2016">2016</option>
                                    <option value="2015">2015</option>
                                    <option value="2014">2014</option>
                                    <option value="2013">2013</option>
                                    <option value="2012">2012</option>
                                    <option value="2011">2011</option>
                                    <option value="2010">2010</option>
                                    <option value="2009">2009</option>
                                    <option value="2008">2008</option>
                                    <option value="2007">2007</option>
                                    <option value="2006">2006</option>
                                    <option value="2005">2005</option>
                                    <option value="2004">2004</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className="movies__title"> {`Phim ${movie?.cat?.name}`}</h2>
                <div className="horizontal"></div>
                <div className="row row-cols-xxl-5 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-4">
                    {movie?.items?.map((movie, index) => {
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
                                        <h5 className="card-title">
                                            {movie.name}
                                        </h5>
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
                        forcePage={page - 1}
                    />
                </div>
            </div>
        </>
    );
};

export default MoviesType;
