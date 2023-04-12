import Button from "../Button";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home">
            <div className="homeContainer">
                <div className="homeTitle">AUTUMN</div>
                <div className="homeTitle thin">COLLECTION</div>
                <Link className="customButton homeButton" to="/shop">Shop Now</Link>
            </div>
        </div>
    );
};

export default Home;