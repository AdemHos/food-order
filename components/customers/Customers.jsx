import React from 'react'
import Title from '../ui/Title'
import CustomersItem from './CustomersItem'
import Slider from 'react-slick'
import { FaChevronLeft,FaChevronRight } from "react-icons/fa6";

const Customers = () => {
  const NextBtn = ({onClick}) => {
    return (
      <button className='absolute -bottom-12 left-1/2 bg-primary text-white w-10 h-10
     rounded-full flex items-center justify-center' onClick={onClick}>
        <FaChevronRight/>
      </button>
    )
  }
  
  const PrevBtn = ({onClick}) => {
   return (
     <button className='absolute -bottom-12 right-1/2 bg-primary text-white w-10 h-10
     rounded-full flex items-center justify-center mr-4' onClick={onClick}>
      <FaChevronLeft/>
     </button>
   )
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    nextArrow: <NextBtn/>,
    prevArrow: <PrevBtn/>,
    responsive: [
     {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        arrows: false
      }
     }
    ]

  }
  return (
    <div className='container mx-auto my-16'>
      <Title addClass={"text-[40px] text-center"}>What Say Our Customers ?</Title>
      <Slider {...settings}>
        <CustomersItem imgSrc="/images/client1.jpg" name="Diana Colins" location="Boston"/>
        <CustomersItem imgSrc="/images/client2.jpg" name="Louis Walker" location="Utah"/>
        <CustomersItem imgSrc="/images/client1.jpg" name="Louis Walker" location="Utah"/>
        <CustomersItem imgSrc="/images/client2.jpg" name="Louis Walker" location="Utah"/>
      </Slider>
    </div>
  )
}

export default Customers