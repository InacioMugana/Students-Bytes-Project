import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Header } from "../components/header";
import { Footer } from "../components/footer/footer";

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

      <Slider {...settings}>
        <div>
          <img src="/image1.jpg" alt="image1" />
        </div>
        <div>
          <img src="/image2.jpg" alt="image 2" />
        </div>
        <div>
          <img src="/image3.jpg" alt="image 3" />
        </div>
        <div>
          <img src="/image4.jpg" alt="image 4" />
        </div>
      </Slider>

      <Footer />
    </div>
  );
};

export default Home;
