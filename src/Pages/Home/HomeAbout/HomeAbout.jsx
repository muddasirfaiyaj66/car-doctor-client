import person from "../../../assets/images/about_us/person.jpg"
import parts from "../../../assets/images/about_us/parts.jpg"

const HomeAbout = () => {
    return (
        <div className="my-10">
            <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row">
   <div className="lg:w-1/2 relative" >
   <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
   <img src={parts} className="w-1/2 rounded-lg absolute shadow-2xl right-5 border-8 border-white top-1/2" />
   </div>
    <div className="lg:w-1/2 space-y-8 mt-10  lg:mt-0">
      <h5 className="text-xl text-[#FF3811] font-bold ">About Us</h5>
      <h1 className="lg:text-5xl text-4xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>

      <p className="text-[#737373]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
      <p className="text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
      <button className="btn hover:bg-[#f56767d8] bg-[#FF3811] text-white btn-md">Get More Info</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default HomeAbout;