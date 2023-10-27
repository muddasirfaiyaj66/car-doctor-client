import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";


const Main = () => {
    return (
        <div>
           <div className="max-w-screen-xl mx-auto "> 
           <Navbar></Navbar>
           </div>
           <Outlet></Outlet> 
           <Footer></Footer>
        </div>
    );
};

export default Main;