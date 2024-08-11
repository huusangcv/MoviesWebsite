// import { useEffect, useState } from "react";
// import MoviesApi from "./moviesApi";
// import { useParams } from "react-router-dom";

// const movieDetail = () => {
//     const { slug } = useParams();
//     const [movie, setMovie] = useState(null);

//     useEffect(() => {
//         const fetchMovie = async () => {
//             try {
//                 const response = await MoviesApi.getMovieDetail(slug);
//                 setMovie(response.movie);
//             } catch (error) {
//                 console.error("Error fetching movie:", error);
//             }
//         };
//         fetchMovie();
//     }, [slug]);

//     return movie;
// };

// export default movieDetail;
