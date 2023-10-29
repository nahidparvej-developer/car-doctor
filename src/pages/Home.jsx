import Banner from "../header/Banner";
import About from "./About";
import Service from "./Service";


const Home = () => {
    return (
        <div>
        <Banner></Banner>

        <div>
            <About></About>
            <Service></Service>
        </div>
        </div>
    );
};

export default Home;