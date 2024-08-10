// import { useEffect, useState } from "react";
// import MoviesApi from "../api/moviesApi";

// const NewMovies = () => {
//     const [movieNew, setMovieNew] = useState([]);

//     useEffect(() => {
//         const fecthMovies = async () => {
//             try {
//                 const params = { page: 1 };
//                 const response = await MoviesApi.getMovieNew(params);
//                 setMovieNew(response);
//             } catch (error) {
//                 console.log("Faild to fetch movies", error);
//             }
//         };
//         fecthMovies();
//     }, []);
//     return (
//         <div className="container">
//             <h2 className="movies__title">{movieNew?.cat?.name}</h2>
//             <div className="horizontal"></div>
//             <div className="row row-cols-4 row-cols-xxl-4 row-cols-xl-3 row-cols-lg-3 row-cols-md-3   row-cols-sm-2  g-4 ">
//                 {movieNew?.items?.map((movie, index) => {
//                     return (
//                         <div className="col" key={index}>
//                             <a href="#!" className="card">
//                                 <div className="card-poster">
//                                     <img
//                                         src={movie.poster_url}
//                                         className="card-img-top"
//                                         alt="..."
//                                     />
//                                 </div>

//                                 <div className="card-body">
//                                     <h5 className="card-title">{movie.name}</h5>
//                                     <p className="card-text">
//                                         {movie.original_name}
//                                     </p>
//                                 </div>
//                             </a>
//                         </div>
//                     );
//                 })}
//             </div>
//         </div>
//     );
// };

// export default NewMovies;
