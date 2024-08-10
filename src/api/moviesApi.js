// api/productApi.js
import axiosClient from "./axiosClient";
const MoviesApi = {
    getMovieWatching: (params) => {
        const url = "/phim-dang-chieu";
        return axiosClient.get(url, { params });
    },

    getMovieNew: (params) => {
        const url = "/phim-moi-cap-nhat";
        return axiosClient.get(url, { params });
    },

    getPage: (id) => {
        const url = `/phim-dang-chieu?page=${id}`;
        return axiosClient.get(url);
    },
};
export default MoviesApi;
