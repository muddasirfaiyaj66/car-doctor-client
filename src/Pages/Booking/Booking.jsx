import { useContext, useEffect, useState } from "react";
import checkout from "../../assets/images/checkout/checkout.png";
import vector from "../../assets/images/checkout/Vector.png";
import { AuthContext } from "../../Providers/AuthProvider";
const Booking = () => {
    const {user}= useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    useEffect(() =>{
        fetch(url)
        .then(res=> res.json())
        .then(data => setBookings(data))
    },[])
    return (
        <div>
            
                  {/* Booking card design */}
      <div className="max-w-screen-xl mx-auto relative my-10">
        <img src={checkout} alt="" />
        <div className="absolute flex items-center rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] top-0   w-1/2 h-full">
          
          <div >
          <h1 className="ml-8  -mt-5 lg:mt-0 text-white font-bold lg:text-3xl">
          Cart Details
          </h1>
          <p className="text-[#FF3811]  ml-8 -mt-5 lg:mt-0 ">
          Home - Product Details
          </p>
          </div>
        </div>
        <div className="text-center flex justify-center items-center ">
          <img src={vector} alt="" className="absolute mb-12 " />

          
        </div>
      </div>
      {/* Booking card design End  */}

      <h1 className="text-center font-bold text-3xl my-5">
        Your Bookings: {bookings.length}
      </h1>
        </div>
    );
};

export default Booking;