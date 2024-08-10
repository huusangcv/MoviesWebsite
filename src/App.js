import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Layout/Header";
import "./sass/main.scss";
import Footer from "./Components/Layout/Footer";
import Movies from "./Components/Home/Movies";
function App() {
    return (
        <div className="app-container">
            <Header />
            <Movies />
        </div>
    );
}

export default App;
