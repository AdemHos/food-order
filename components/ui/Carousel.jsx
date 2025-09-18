import Image from "next/image";
import React from "react";
import Title from "./Title";
import Slider from "react-slick";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay:true,
    autoplaySpeed: 2000,
    appenDots: (dots) => (
      <div>
        <ul>{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-3 h-3 border bg-white rounded-full mt-10"></div>
    ),
  };
  return (
    <div className="h-screen -mt-[88px] container mx-auto">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="relative w-full h-full">
          <Image src={"/images/slider-1.jpg"} layout="fill" objectFit="cover" />
        </div>
      </div>
      {/* Slider */}
      <Slider {...settings}>
        <div>
          <div className=" mt-48  text-white flex flex-col gap-y-10 items-start">
            <Title addClass={"text-white text-6xl"}>Special Burgers</Title>
            <p className="text-white sm:w-2/5 w-1/2 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              ipsa omnis natus dignissimos dolorem voluptatem ipsam ad adipisci
              soluta magni, facere neque placeat ab exercitationem eos labore
              cupiditate necessitatibus a nulla temporibus enim fugit eaque
              autem perferendis? Eveniet atque commodi libero at voluptates,
              explicabo quos ipsam hic minima iste optio?
            </p>
            <button className="px-[30px] py-[8px] bg-primary text-white hover:bg-orange-600 rounded-2xl">
              Order Now
            </button>
          </div>
        </div>
        <div>
          <div className=" mt-48  text-white flex flex-col gap-y-10 items-start">
            <Title addClass={"text-white text-6xl"}>Special Burgers</Title>
            <p className="text-white sm:w-2/5 w-1/2 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              ipsa omnis natus dignissimos dolorem voluptatem ipsam ad adipisci
              soluta magni, facere neque placeat ab exercitationem eos labore
              cupiditate necessitatibus a nulla temporibus enim fugit eaque
              autem perferendis? Eveniet atque commodi libero at voluptates,
              explicabo quos ipsam hic minima iste optio?
            </p>
            <button className="px-[30px] py-[8px] bg-primary text-white hover:bg-orange-600 rounded-2xl">
              Order Now
            </button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
