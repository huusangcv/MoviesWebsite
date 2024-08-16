import { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../../api/Auth/apiAuth";
import { toast } from "react-toastify";

import { useDispatch } from "react-redux";
import { CgSpinnerTwoAlt } from "react-icons/cg";
import { doLogin } from "../../redux/actions/userAction";
const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = async () => {
        setLoading(true);
        // //submid apis
        let data = await postLogin(email.trim(), password.trim());
        console.log(data);
        if (data && +data.EC === 0) {
            // dispatch(doLogin(data));

            localStorage.setItem(
                "user",
                JSON.stringify({
                    authToken: data.DT.username,
                    // Có thể lưu thêm các thông tin khác như token, role, etc.
                })
            );
            console.log(data.EM);
            toast.success("Đăng nhập thành công!");
            setLoading(false);
            navigate("/MoviesWebsite");
        }
        if (data && +data.EC !== 0) {
            console.log(data.EM);
            setLoading(false);
            toast.error(data.EM);
        }
    };
    return (
        <div className="login-container">
            <section className="bg-light p-2 p-md-3 p-xl-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-9 col-md-9 col-lg-7 col-xl-6 col-xxl-5">
                            <div className="card border border-light-subtle rounded-4">
                                <div className="card-body p-3 p-md-4 p-xl-5">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="mb-5">
                                                <div className="text-center mb-4">
                                                    <a
                                                        href=""
                                                        onClick={() =>
                                                            navigate("/")
                                                        }
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="108"
                                                            height="24"
                                                            fill="none"
                                                            className="sc-91abde0-1 bULroO"
                                                        >
                                                            <path
                                                                fill="currentColor"
                                                                d="M69.87 16.61c-2.22 0-3.37-1.83-3.37-4.08s1.13-3.99 3.37-3.99c2.29 0 3.37 1.82 3.37 3.99-.02 2.29-1.16 4.08-3.37 4.08ZM48.1 8.54c1.3 0 1.84.76 1.84 1.42 0 1.6-1.62 2.29-5.01 2.39 0-1.97 1.12-3.8 3.17-3.8Zm-14.44 8.07c-2.1 0-2.99-1.71-2.99-4.08 0-2.35.9-3.99 3-3.99 2.12 0 3.12 1.7 3.12 3.99 0 2.39-1.04 4.08-3.13 4.08Zm-17.8-10.4h-3.3l5.46 12.51c-1.04 2.31-1.6 2.89-2.32 2.89-.77 0-1.49-.62-2-1.16l-1.45 1.92a5.14 5.14 0 0 0 3.7 1.63c1.73 0 3.05-1 3.82-2.79l6.3-15.02h-3.24l-3.28 8.97-3.7-8.95Zm87.1 2.33c1.6 0 1.92 1.1 1.92 3.67v6.75h2.85v-8.52c0-3.07-2.1-4.4-4.05-4.4-1.73 0-3.31 1.07-4.2 3.06a4.01 4.01 0 0 0-3.96-3.07c-1.63 0-3.25 1.04-4.13 2.97V6.21h-2.85v12.73h2.85V13.5c0-2.74 1.44-4.96 3.4-4.96 1.6 0 1.9 1.1 1.9 3.67v6.75h2.86l-.02-5.46c0-2.74 1.46-4.96 3.42-4.96ZM80.14 6.21h-1.36v12.73h2.85v-4.88c0-3.09 1.36-5.18 3.39-5.18.52 0 .96.02 1.44.22l.44-3c-.36-.05-.68-.09-1-.09-2 0-3.45 1.38-4.29 3.15V6.21h-1.47Zm-10.28-.2c-3.77 0-6.31 2.87-6.31 6.5 0 3.76 2.58 6.57 6.31 6.57 3.8 0 6.38-2.89 6.38-6.57C76.23 8.86 73.6 6 69.87 6Zm-21.61 10.6a2.98 2.98 0 0 1-3.05-2.29c3.77-.16 7.46-1.08 7.46-4.4 0-1.91-1.89-3.89-4.6-3.89-3.64 0-6.1 2.97-6.1 6.5 0 3.68 2.42 6.57 6.05 6.57a6.62 6.62 0 0 0 5.39-2.49l-1.38-1.87c-1.47 1.5-2.37 1.87-3.77 1.87ZM34.22 6.01c-1.44 0-2.89.84-3.45 2.16V6.2h-2.84v17.73h2.84v-6.33c.6.91 1.99 1.51 3.21 1.51 3.8 0 5.8-2.8 5.8-6.6-.02-3.74-1.99-6.5-5.56-6.5Zm-19.97-4.9H.82v2.77h5.25v15.06h2.99V3.88h5.2V1.12Zm42.33 5.1h-1.7v2.55h1.7v10.18h2.85V8.76h2.76V6.21h-2.76V4.22c0-1.27.52-1.71 1.7-1.71.44 0 .84.12 1.38.3l.65-2.4A5.44 5.44 0 0 0 60.9 0c-2.73 0-4.33 1.63-4.33 4.46v1.75Z"
                                                            ></path>
                                                        </svg>
                                                    </a>
                                                </div>

                                                <h4 className="text-center">
                                                    Welcome back you've been
                                                    missed!
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                    <form
                                        action="#!"
                                        autoComplete="off"
                                        onSubmit={(e) => e.preventDefault()}
                                    >
                                        <div className="row gy-3 overflow-hidden">
                                            <div className="col-12">
                                                <div className="form-floating mb-3">
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        name="email"
                                                        placeholder="name@example.com"
                                                        required
                                                        value={email}
                                                        onChange={(e) =>
                                                            setEmail(
                                                                e.target.value
                                                            )
                                                        }
                                                    ></input>
                                                    <label
                                                        htmlFor="email"
                                                        className="form-label"
                                                    >
                                                        Email
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating mb-3">
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        name="password"
                                                        id="password"
                                                        placeholder="Password"
                                                        required
                                                        value={password}
                                                        onChange={(e) =>
                                                            setPassword(
                                                                e.target.value
                                                            )
                                                        }
                                                    ></input>
                                                    <label
                                                        htmlFor="password"
                                                        className="form-label"
                                                    >
                                                        Password
                                                    </label>
                                                </div>
                                            </div>
                                            {/* <div className="col-12">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value=""
                                                        name="remember_me"
                                                        id="remember_me"
                                                    ></input>
                                                    <label
                                                        className="form-check-label text-secondary"
                                                        htmlFor="remember_me"
                                                    >
                                                        Keep me logged in
                                                    </label>
                                                </div>
                                            </div> */}
                                            <div className="col-12">
                                                <div className="d-grid">
                                                    <button
                                                        className="btn bsb-btn-xl btn-primary"
                                                        // type="submit"
                                                        onClick={() =>
                                                            handleLogin()
                                                        }
                                                        disabled={loading}
                                                    >
                                                        {(loading && (
                                                            <>
                                                                <CgSpinnerTwoAlt className="loader-icon" />
                                                            </>
                                                        )) || (
                                                            <>
                                                                <span>
                                                                    Đăng nhập
                                                                </span>
                                                            </>
                                                        )}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="row">
                                        <div className="col-12">
                                            <hr className="mt-5 mb-4 border-secondary-subtle"></hr>
                                            <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-end">
                                                <a
                                                    href=""
                                                    className="link-secondary text-decoration-none"
                                                    onClick={() =>
                                                        navigate("/register")
                                                    }
                                                >
                                                    Tạo mới tài khoản
                                                </a>
                                                {/* <a
                                                    href="#!"
                                                    className="link-secondary text-decoration-none"
                                                >
                                                    Forgot password
                                                </a> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;
