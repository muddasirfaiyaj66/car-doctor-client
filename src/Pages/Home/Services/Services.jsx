import { useEffect } from "react";
import { useState } from "react";
import ServicesCart from "./ServicesCart";


const Services = () => {
    const [services , setServices] = useState([]);

    useEffect(()=>{
        fetch('services.json')
        .then(res=> res.json())
        .then(data=> setServices(data))
    },[])
    return (
        <div>
            <div className="text-center space-y-5">
                <h3 className="text-3xl font-medium text-[#FF3811]">Service</h3>
                <h1 className="text-5xl font-bold ">Our Service Area</h1>

                <p className="text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>


            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 my-10 lg:grid-cols-3 gap-5  ">
                {
                    services.map(serData => <ServicesCart key={serData._id} serData={serData}></ServicesCart>)
                }

            </div>
        </div>
    );
};

export default Services;