import { AiOutlineArrowRight } from "react-icons/ai";
const ServicesCart = ({ serData }) => {
  const { _id, title, img, price } = serData;
  return (
    <div>
      <div className="bg-[#FFF] px-6 pt-6 pb-10 rounded-lg shadow-xl">
        <figure >
            <img src={img} alt={title} className="rounded-xl h-[208.008px]" />
        </figure>
        <div >
            <h1 className="text-3xl font-bold "> {title}</h1>
           <div className="flex justify-between items-center text-xl text-[#FF3811] font-medium my-3">
            <div>
                <p>Price: ${price}</p>
            </div>
            <div>
                <AiOutlineArrowRight/>
            </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCart;
