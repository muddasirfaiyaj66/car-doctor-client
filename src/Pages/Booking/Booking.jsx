import { useContext, useEffect, useState } from "react";
import checkout from "../../assets/images/checkout/checkout.png";

import { AuthContext } from "../../Providers/AuthProvider";
import BookingTableRow from "./BookingTableRow";
import Swal from "sweetalert2";
import axios from "axios";
const Booking = () => {
    const {user}= useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    useEffect(() =>{
      axios.get(url, {withCredentials: true})
      .then(res=>{
        setBookings(res.data)
      })
        // fetch(url)
        // .then(res=> res.json())
        // .then(data => setBookings(data))
    },[url]);
    const handleDelete = id =>{
      Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
  
              fetch(`http://localhost:5000/bookings/${id}`, {
                  method:'DELETE',
              })
              .then(res=> res.json())
              .then(data=> {
                  if(data.deletedCount > 0){
                      Swal.fire(
                          'Deleted!',
                          'Your booking data has been deleted.',
                          'success'
                        )

                        const remaining = bookings.filter(booking => booking._id !== id )
                        setBookings(remaining)
                  }
              })
           
          }
        })
     }
     const handleBookingConfirm = id =>{
      fetch(`http://localhost:5000/bookings/${id}`, {
        method:'PATCH',
        headers:{
          'content-type': "application/json"
        },
        body: JSON.stringify({status: 'confirm'})
      } )
      .then(res => res.json())
      .then(data =>{
        console.log(data)
        if(data.modifiedCount > 0){
          
          const remaining = bookings.filter(booking => booking._id !== id)
          const updated = bookings.find(booking => booking._id === id)
          updated.status = 'confirm'
          const newBookings = [updated, ...remaining];
          setBookings(newBookings);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your booking data has been edited',
            showConfirmButton: false,
            timer: 1500
          })

        }
      })
    }


     
    return (
        <div>
            
                  {/* Booking card design */}
      <div className="max-w-screen-xl mx-auto relative my-10">
        <img src={checkout} alt="" />
        <div className="absolute flex items-center rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] top-0   h-full">
          
          <div className="ml-8  -mt-5 lg:mt-0 text-center">
          <h1 className=" text-white font-bold lg:text-3xl">
          Cart Details
          </h1>
          <p className="text-[#FF3811] w-full font-medium   ">
          Home - Product Details
          </p>
          </div>
        </div>
        
      </div>
      {/* Booking card design End  */}

      <h1 className="text-center font-bold text-3xl my-5">
        Your Bookings: {bookings.length}
      </h1>
      {/* Table  */}

      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
         
        </th>
        <th></th>
        <th>Customer Information</th>
        <th>Service</th>
        <th>Booking Date</th>
        <th>Price</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {
        bookings.map(booking => <BookingTableRow key={booking._id} handleDelete={handleDelete} booking={booking} handleBookingConfirm={handleBookingConfirm}></BookingTableRow>)
      }
      
     
     
     
    </tbody>
    
   
    
  </table>
</div>
        </div>
    );
};

export default Booking;