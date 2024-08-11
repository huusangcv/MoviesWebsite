// api/productApi.js
import axiosClient from "./axiosClient";
const MoviesApi = {
    getMovieWatching: (params) => {
        const url = "/films/danh-sach/phim-dang-chieu";
        return axiosClient.get(url, { params });
    },

    getMovieNew: (params) => {
        const url = "/films/phim-moi-cap-nhat";
        return axiosClient.get(url, { params });
    },

    getMoviesSingle: (params) => {
        const url = "/films/danh-sach/phim-le";
        return axiosClient.get(url, { params });
    },
    getMovieSeries: (params) => {
        const url = "/films/danh-sach/phim-bo";
        return axiosClient.get(url, { params });
    },

    getMovieDetail: (slug) => {
        const url = `/film/${slug}`;
        return axiosClient.get(url);
    },
    getMoviesSearch: (params) => {
        const url = `/films/search`;
        return axiosClient.get(url, { params });
    },
};
export default MoviesApi;
