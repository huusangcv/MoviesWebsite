import { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import videoplayback from "../../assets/videoplayback.mp4";
// import { postLogin } from "../../services/apiServices";
// import { toast } from "react-toastify";
// import { useDispatch } from "react-redux";
// import { doLogin } from "../../redux/action/userAction";
import { CgSpinnerTwoAlt } from "react-icons/cg";
const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    // const dispatch = useDispatch();

    // const handleLogin = async () => {
    //     setLoading(true);

    //     //submid apis
    //     let data = await postLogin(email.trim(), password.trim());
    //     console.log(data);
    //     if (data && +data.EC === 0) {
    //         dispatch(doLogin(data));
    //         toast.success(data.EM);
    //         // setLoading(false);
    //         navigate("/");
    //     }

    //     if (data && +data.EC !== 0) {
    //         toast.error(data.EM);
    //         setLoading(false);
    //     }
    // };
    return (
        <div className="login">
            <section className="vh-100 gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div
                                className="card bg-dark text-white"
                                // style="border-radius: 1rem;"
                            >
                                <div className="card-body p-5 text-center">
                                    <div className="mb-md-5 mt-md-4 pb-5">
                                        <h2 className="fw-bold mb-2 text-uppercase">
                                            Login
                                        </h2>
                                        <p className="text-white-50 mb-5">
                                            Please enter your login and
                                            password!
                                        </p>

                                        <div
                                            data-mdb-input-init
                                            className="form-outline form-white mb-4"
                                        >
                                            <input
                                                type="email"
                                                id="typeEmailX"
                                                className="form-control form-control-lg"
                                            />
                                            <label
                                                className="form-label"
                                                for="typeEmailX"
                                            >
                                                Email
                                            </label>
                                        </div>

                                        <div
                                            data-mdb-input-init
                                            className="form-outline form-white mb-4"
                                        >
                                            <input
                                                type="password"
                                                id="typePasswordX"
                                                className="form-control form-control-lg"
                                            />
                                            <label
                                                className="form-label"
                                                for="typePasswordX"
                                            >
                                                Password
                                            </label>
                                        </div>

                                        <p className="small mb-5 pb-lg-2">
                                            <a
                                                className="text-white-50"
                                                href="#!"
                                            >
                                                Forgot password?
                                            </a>
                                        </p>

                                        <button
                                            data-mdb-button-init
                                            data-mdb-ripple-init
                                            className="btn btn-outline-light btn-lg px-5"
                                            type="submit"
                                        >
                                            Login
                                        </button>
                                    </div>
                                    <div>
                                        <p className="mb-0">
                                            Don't have an account?{" "}
                                            <a
                                                href="#!"
                                                className="text-white-50 fw-bold"
                                            >
                                                Sign Up
                                            </a>
                                        </p>
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
