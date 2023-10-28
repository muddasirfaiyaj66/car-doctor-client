import { useLoaderData } from "react-router-dom";
import checkout from "../../assets/images/checkout/checkout.png";
import vector from "../../assets/images/checkout/Vector.png";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Checkout = () => {
    const service =  useLoaderData();
    const {title, _id, price, img } =service;
    const {user} = useContext(AuthContext);
    console.log(user);
    const handleOrderConfirm = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const message = form.message.value;

        const bookingData = {customerName: name,
          date,
          phone,
          email,
          message,
          img,
          service:title, 
          service_id: _id,
           price
          };
        console.log(bookingData);
        fetch('http://localhost:5000/bookings', {
          method:'POST',
          headers:{
            'content-type': 'application/json'
          },
          body:JSON.stringify(bookingData)
        })
        .then(res => res.json())
        .then(data => {
          if(data.insertedId){
            Swal.fire({
              icon: 'success',
              title: 'congrats',
              text: 'Successfully Booked ',
              
            })
          }
        })
    }
    return (
        <div>
                  {/* checkout card design */}
      <div className="max-w-screen-xl mx-auto relative my-10">
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
            Home/Checkout
            </h1>
          </div>
        </div>
      </div>
      {/* Checkout card design End  */}

      <h1 className="text-3xl font-bold text-center">Book Service: {title}</h1>


      <div className="max-w-screen-xl mx-auto my-10 rounded-xl  p-10 bg-[#F3F3F3]"> 
      <form onSubmit={handleOrderConfirm}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" defaultValue={user?.displayName? user.displayName : ''
} placeholder="Name" name='name' className="input input-bordered" required />
        </div>
            <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date"  name='date' className="input input-bordered" required />
        </div>
            <div className="form-control">
          <label className="label">
            <span className="label-text">Your Phone</span>
          </label>
          <input type="number" placeholder="Your Phone" name='phone' className="input input-bordered" required />
        </div>
            <div className="form-control">
          <label className="label">
            <span className="label-text">Your Email</span>
          </label>
          <input type="email" defaultValue={user?.email} placeholder="Your Email" name='email' className="input input-bordered" required />
        </div>

            </div>
            <div className="form-control">
          <label className="label">
            <span className="label-text">Your Message</span>
          </label>
          <textarea placeholder="Your Message..." name="message" required className="input input-bordered w-full h-[250px]"></textarea>
        </div>
            <button className="text-white my-8 bg-[#FF3811] font-bold w-full btn hover:bg-[#c54228]"> Order Confirm</button>

      </form>

      </div>
        </div>
    );
};

export default Checkout;