import checkout from '../../assets/images/checkout/checkout.png'
import vector from '../../assets/images/checkout/Vector.png'

const ServiceDetails = () => {
    return (
        <div className='my-10 p-5 '>
            {/* checkout card design */}
            <div className='max-w-screen-xl mx-auto relative '>
                <img src={checkout} alt="" />
                <div className="absolute flex items-center rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] top-0   w-1/2 h-full">
                    <h1 className='ml-8 -mt-5 lg:mt-0 text-white font-bold lg:text-3xl'>Service Details</h1>
                </div>
              <div className='text-center flex justify-center items-center '>
              
              <img src={vector} alt="" className='absolute mb-12 ' />
           
            <div className="absolute flex items-center bottom-3">
                    <h1 className=' text-white font-bold text-sm '>Home/Service Details</h1>
                </div>
          
              </div>
            </div>
            {/* Checkout card design End  */}
        </div>
    );
};

export default ServiceDetails;