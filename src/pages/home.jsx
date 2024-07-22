import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

export const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="flex flex-col justify-between ">
      <Header />

      <div className="relative">
        <Slider {...settings}>
          <div>
            <div className="relative">
              <img src="/image1.jpg" alt="image1" />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <h1 className="text-slate-600 text-5xl font-bold bg-white">
                  Students Management
                </h1>
              </div>
            </div>
          </div>
          <div>
            <div className="relative">
              <img src="/image2.jpg" alt="image 2" />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <h1 className="text-slate-600 text-5xl font-bold bg-white">
                  Intensive learning
                </h1>
              </div>
            </div>
          </div>
          <div>
            <div className="relative">
              <img src="/image3.jpg" alt="image 3" />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <h1 className="text-slate-600 text-5xl font-bold bg-white">
                  Educational strategies
                </h1>
              </div>
            </div>
          </div>
          <div>
            <div className="relative">
              <img src="/image4.jpg" alt="image 4" />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <h1 className="text-slate-600 text-5xl font-bold bg-white">
                  Effective methods of academic
                </h1>
              </div>
            </div>
          </div>
        </Slider>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
