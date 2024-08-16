import axiosClient from "../axiosClient";

const postLogin = (email, password) => {
    return axiosClient.post("http://localhost:8081/api/v1/login", {
        email,
        password,
        delay: 3000,
    });
};
export { postLogin };
