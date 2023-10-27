import HomeAbout from "./HomeAbout/HomeAbout";
import HomeBanner from "./HomeBanner/HomeBanner";
import HomeContact from "./HomeContact/HomeContact";
import Services from "./Services/Services";

const Home = () => {
    return (
        <div className="max-w-screen-xl mx-auto p-5 md:p-10">
            <HomeBanner></HomeBanner>
            <HomeAbout></HomeAbout>
            <Services></Services>
            <HomeContact></HomeContact>
        </div>
    );
};

export default Home;