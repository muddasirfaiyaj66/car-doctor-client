import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";

const HomeBanner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full h-[600px]">
          <img src={img1} className="w-full rounded-xl" />
          <div className="absolute flex items-center rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]   w-1/2 h-full">
            <div className="text-white ml-12 lg:space-y-7  space-y-3 ">
              <h1 className="lg:text-5xl text-2xl font-bold">
                Affordable <br /> Price For Car <br /> Servicing
              </h1>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="lg:flex space-y-3 lg:space-y-0 gap-5">
                <button className="btn  hover:bg-[#e74525] bg-[#FF3811] text-white">
                  Discover More
                </button>
                <button className="btn  btn-outline border-white text-white ">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide6" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle text-white bg-[#FF3811] hover:bg-[#e74525] ">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full h-[600px]">
          <img src={img2} className="w-full rounded-xl" />
          <div className="absolute flex items-center rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]   w-1/2 h-full">
            <div className="text-white ml-12 lg:space-y-7 space-y-3">
              <h1 className="lg:text-5xl text-2xl font-bold">
                Affordable <br /> Price For Car <br /> Servicing
              </h1>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="lg:flex space-y-3 lg:space-y-0 gap-5">
                <button className="btn hover:bg-[#e74525] bg-[#FF3811] text-white">
                  Discover More
                </button>
                <button className="btn btn-outline border-white text-white ">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle  text-white bg-[#FF3811] hover:bg-[#e74525]">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full h-[600px]">
          <img src={img3} className="w-full rounded-xl" />
          <div className="absolute flex items-center rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]   w-1/2 h-full">
            <div className="text-white  ml-12 lg:space-y-7 space-y-3">
              <h1 className="lg:text-5xl text-2xl font-bold">
                Affordable <br /> Price For Car <br /> Servicing
              </h1>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="lg:flex space-y-3 lg:space-y-0 gap-5">
                <button className="btn hover:bg-[#e74525] bg-[#FF3811] text-white">
                  Discover More
                </button>
                <button className="btn btn-outline border-white text-white ">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle  text-white bg-[#FF3811] hover:bg-[#e74525]">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full h-[600px]">
          <img src={img4} className="w-full rounded-xl" />
          <div className="absolute flex items-center rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]   w-1/2 h-full">
            <div className="text-white ml-12 lg:space-y-7 space-y-3">
              <h1 className="lg:text-5xl text-2xl font-bold">
                Affordable <br /> Price For Car <br /> Servicing
              </h1>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="lg:flex space-y-3 lg:space-y-0 gap-5">
                <button className="btn hover:bg-[#e74525] bg-[#FF3811] text-white">
                  Discover More
                </button>
                <button className="btn btn-outline border-white text-white ">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide5" className="btn btn-circle  text-white bg-[#FF3811] hover:bg-[#e74525]">
              ❯
            </a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full h-[600px]">
          <img src={img5} className="w-full rounded-xl" />
          <div className="absolute flex items-center rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]   w-1/2 h-full">
            <div className="text-white ml-12 lg:space-y-7 space-y-3">
              <h1 className="lg:text-5xl text-2xl font-bold">
                Affordable <br /> Price For Car <br /> Servicing
              </h1>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="lg:flex space-y-3 lg:space-y-0 gap-5">
                <button className="btn hover:bg-[#e74525] bg-[#FF3811] text-white">
                  Discover More
                </button>
                <button className="btn btn-outline border-white text-white ">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide6" className="btn btn-circle  text-white bg-[#FF3811] hover:bg-[#e74525]">
              ❯
            </a>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full h-[600px]">
          <img src={img6} className="w-full rounded-xl" />
          <div className="absolute flex items-center rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]   w-1/2 h-full">
            <div className="text-white ml-12 lg:space-y-7 space-y-3">
              <h1 className="lg:text-5xl text-2xl font-bold">
                Affordable <br /> Price For Car <br /> Servicing
              </h1>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="lg:flex space-y-3 lg:space-y-0 gap-5">
                <button className="btn hover:bg-[#e74525] bg-[#FF3811] text-white">
                  Discover More
                </button>
                <button className="btn btn-outline border-white text-white ">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide5" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle  text-white bg-[#FF3811] hover:bg-[#e74525]">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
