export const FETCH_MOVIES_REQUEST = "FETCH_MOVIES_REQUEST";

export const fetchMoviesRequest = (movies) => {
    return {
        type: FETCH_MOVIES_REQUEST,
        payload: movies,
    };
};
