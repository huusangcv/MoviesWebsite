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
                                                        <span className="logo__name">
                                                            Movies
                                                        </span>
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
