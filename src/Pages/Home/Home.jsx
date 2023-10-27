import HomeAbout from "./HomeAbout/HomeAbout";
import HomeBanner from "./HomeBanner/HomeBanner";

const Home = () => {
    return (
        <div className="max-w-screen-xl mx-auto p-5 md:p-10">
            <HomeBanner></HomeBanner>
            <HomeAbout></HomeAbout>
        </div>
    );
};

export default Home;