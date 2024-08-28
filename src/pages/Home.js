import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import SliderComponent from "../components/SilderComponents/SliderComponent";
const Home = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    setTimeout(() => {
        setIsLoading(false);
    }, 3000);

    return (
        <>
            {isLoading && <div>Loading....</div>}
            <div className={(isLoading && "loader") || ""}>
                <SliderComponent />
            </div>
        </>
    );
};

export default Home;
