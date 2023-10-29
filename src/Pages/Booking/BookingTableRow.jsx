


const BookingTableRow = ({booking,handleDelete,handleBookingConfirm}) => {
    const {_id, img, title,customerName,date,message
,        service,phone,price, status

    } = booking;


 
    return (
        
            <tr>
        <th>
        <button onClick={()=> handleDelete(_id)} className="btn btn-circle hover:bg-red-500 hover:text-white ">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
        </th>
        <td>
        <div className="avatar">
              <div className="w-32 rounded">
                <img src={img} alt={title} />
              </div>
            </div>
        </td>
        <td>
          <div className="flex items-center space-x-3">
            
            <div>
              <div className="font-bold">{customerName}</div>
              <div className="text-sm opacity-50">{phone}</div>
            </div>
          </div>
        </td>
        <td>
          {service}
          <br/>
          <span className="badge badge-ghost badge-sm">{message
}</span>
        </td>
        <td>{date}</td>
        <th>
          <button className="btn btn-ghost btn-xs">{price}</button>
        </th>
        <td>
            {
                status === 'confirm' ?<li  className="bg-[#FF3811] text-white btn rounded-lg">Confirm</li>  :
                <li onClick={()=>handleBookingConfirm(_id)} className="bg-[#1cc796] text-white btn rounded-lg">Pending</li>
                
                
            }
        </td>
      </tr>
        
    );
};

export default BookingTableRow;