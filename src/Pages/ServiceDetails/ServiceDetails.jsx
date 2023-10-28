import { Link, useLoaderData } from "react-router-dom";
import checkout from "../../assets/images/checkout/checkout.png";
import vector from "../../assets/images/checkout/Vector.png";
import group from "../../assets/images/checkout/Group 38667.svg";
import man from "../../assets/images/banner/2.jpg";
import frame from "../../assets/icons/Frame.svg";
import logo from "../../assets/Group 1.svg";
import frame1 from "../../assets/icons/Frame (1).svg";
import FacilityCard from "./FacilityCard";
import { AiOutlineArrowRight } from "react-icons/ai";

const ServiceDetails = () => {
  const singleServiceData = useLoaderData();
  const { _id, service_id, title, img, price, description, facility } =
    singleServiceData || {};
  return (
    <div className="my-10 p-5 max-w-screen-xl mx-auto ">
      {/* checkout card design */}
      <div className="max-w-screen-xl mx-auto relative ">
        <img src={checkout} alt="" />
        <div className="absolute flex items-center rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] top-0   w-1/2 h-full">
          <h1 className="ml-8 -mt-5 lg:mt-0 text-white font-bold lg:text-3xl">
            Service Details
          </h1>
        </div>
        <div className="text-center flex justify-center items-center ">
          <img src={vector} alt="" className="absolute mb-12 " />

          <div className="absolute flex items-center bottom-3">
            <h1 className=" text-white font-bold text-sm ">
              Home/Service Details
            </h1>
          </div>
        </div>
      </div>
      {/* Checkout card design End  */}

      <div className="grid grid-cols-1 my-10 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div>
            <img src={img} className="rounded-lg w-full" alt="" />
          </div>
          <div className="space-y-5 my-5">
            <h1 className="text-3xl font-bold ">{title}</h1>
            <p className="text-[#737373]">{description}</p>
          </div>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 ">
            {facility.map((facilityData, idx) => (
              <FacilityCard
                key={idx}
                facilityData={facilityData}
              ></FacilityCard>
            ))}
          </div>

          <div className="space-y-5 my-5">
            <h1 className="text-3xl font-bold ">3 Simple Steps to Process</h1>
            <p className="text-[#737373]">{description}</p>
          </div>

          <div className="grid my-8 grid-cols-1 md:grid-cols-2 text-center lg:grid-cols-3 gap-4">
            <div className="w-[235px] h-[277px] bg-[#FFF] p-4 shadow-xl rounded-lg">
              <div className="relative text-center flex justify-center items-center mt-8">
                <img src={group} alt="" className="" />
                <h1 className="absolute text-white font-bold">1</h1>
              </div>
              <div className="space-y-5 text-center">
                <h1 className="text-3xl font-bold ">Step One</h1>
                <p className="text-[#737373]">
                  It uses a dictionary of over 200 .
                </p>
              </div>
            </div>
            <div className="w-[235px] h-[277px] bg-[#FFF] p-4 shadow-xl rounded-lg">
              <div className="relative text-center flex justify-center items-center mt-8">
                <img src={group} alt="" className="" />
                <h1 className="absolute text-white font-bold">2</h1>
              </div>
              <div className="space-y-5  text-center">
                <h1 className="text-3xl font-bold ">Step Two</h1>
                <p className="text-[#737373]">
                  It uses a dictionary of over 200 .
                </p>
              </div>
            </div>
            <div className="w-[235px] h-[277px] bg-[#FFF] p-4 shadow-xl rounded-lg">
              <div className="relative text-center flex justify-center items-center mt-8">
                <img src={group} alt="" className="" />
                <h1 className="absolute text-white font-bold">3</h1>
              </div>
              <div className="space-y-5  text-center">
                <h1 className="text-3xl font-bold ">Step Three</h1>
                <p className="text-[#737373]">
                  It uses a dictionary of over 200 .
                </p>
              </div>
            </div>
          </div>
          <div className="relative ">
            <img src={man} className="w-[750px] h-[400px] rounded-lg" alt="" />
            <div className="text-center flex justify-center items-center ">
              <img
                src={frame}
                className=" absolute top-1/2 -mt-12 mr-8"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="lg:col-span-1">
          <div className="w-[364px] h-[490px] bg-[#F3F3F3] rounded-xl p-4 mt-8 lg:mt-0 mb-8">
            <h1 className="text-2xl font-bold my-4">Services</h1>

            <div className="space-y-5">
              <div className="w-[284px] bg-[#FFF] rounded-md h-[56px] p-3">
                <h1 className="font-medium text-xl ">Full Car Repair</h1>
              </div>
              <div className="w-[284px] bg-[#FFF] rounded-md h-[56px] p-3">
                <h1 className="font-medium text-xl ">Engine Repair</h1>
              </div>
              <div className="w-[284px] bg-[#FFF] rounded-md h-[56px] p-3">
                <h1 className="font-medium text-xl ">Automatic Services</h1>
              </div>
              <div className="w-[284px] bg-[#FFF] rounded-md h-[56px] p-3">
                <h1 className="font-medium text-xl ">Engine Oil Change</h1>
              </div>
              <div className="w-[284px] bg-[#FFF] rounded-md h-[56px] p-3">
                <h1 className="font-medium text-xl ">Battery Charge</h1>
              </div>
            </div>
          </div>

          <div className="bg-black rounded-xl text-white w-[364px] h-[262px] my-8 p-4">
            <h1 className="text-2xl font-bold ml-2 mb-5"> Download</h1>

            <div className="flex justify-between items-center">
              <div>
                <img src={frame1} alt="" />
              </div>
              <div className="-ml-8">
                <h1 className="text-xl font-bold ">Our Brochure</h1>
                <p className="text-[#A2A2A2]">Download</p>
              </div>
              <div className="btn outline-none text-white text-xl btn-sm bg-[#FF3811] hover:bg-[#d02c16]">
                <AiOutlineArrowRight></AiOutlineArrowRight>
              </div>
            </div>
            <div className="flex justify-between items-center ">
              <div>
                <img src={frame1} alt="" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Company Details</h1>
                <p className="text-[#A2A2A2]">Download</p>
              </div>
              <div className="btn outline-none text-white text-xl btn-sm bg-[#FF3811] hover:bg-[#d02c16]">
                <AiOutlineArrowRight></AiOutlineArrowRight>
              </div>
            </div>
          </div>
          <div className="mb-8 w-[364px] h-[489px] bg-[#151515] rounded-xl ">
            <div className="flex justify-center items-center">
              <img className="mt-10  " src={logo} alt="" />
            </div>
            <h1 className="text-center font-bold text-white text-xl ">
              Car Doctor
            </h1>

            <h1 className="text-center font-medium my-4 text-white text-xl ">
              Need Help? We Are Here <br />
              To Help You
            </h1>

            <div className="max-w-screen-sm mx-auto w-[270px] h-[126px] bg-[#FFF] rounded-lg">
            <h1 className="text-center font-bold py-5  text-xl ">
            <span className="text-[#FF3811]">Car Doctor</span> Special<br />
            Save up to <span className="text-[#FF3811]">60% off</span>
            </h1>
            <div className="w-[170px] bg-[#FF3811] mx-auto h-[56px] rounded-md">
                <h1 className="text-xl font-bold text-white text-center pt-3">Get A Quote</h1>
            </div>
            </div>
          </div>

          <h1 className="text-3xl font-bold mb-6">Price: ${price} </h1>

          <Link to={`/checkout/${_id}`}>
          <button className="w-[364px] h-[56px] bg-[#FF3811] hover:bg-[#d02c16] btn text-white font-medium"> Proceed Checkout</button></Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
