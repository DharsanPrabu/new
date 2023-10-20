import Header from "../Header/Header"
import Slider from "react-slick";
import React, { useState } from 'react';
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdArrowForwardIos, MdArrowBackIosNew  } from "react-icons/md";



function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      // <div
      //   className={className}
      //   style={{ ...style, display: "block", color: "red" }}
      //   onClick={onClick}
      // />
      <MdArrowForwardIos
        className={className}
        onClick={onClick}
        style={{ ...style, display: "block", color: "black" }}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      // <div
      //   className={className}
      //   style={{ ...style, display: "block", color: "red" }}
      //   onClick={onClick}
      // />
      <MdArrowBackIosNew
        className={className}
        onClick={onClick}
        style={{ ...style, display: "block", color: "black" }}
      />
    );
  }
 
  
function Secretsofachoos(){
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        // speed: 2000,
        autoplaySpeed: 2000,
        autoplay: false,
        autoplaySpeed: 2000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };

      var settings1 = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        // speed: 2000,
        autoplaySpeed: 2000,
        autoplay: false,
        autoplaySpeed: 2000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };

      const events = [
        'event1.jpg',
        'event2.jpg',
        'event1.jpg',
        'event2.jpg',
        'event1.jpg',
        'event2.jpg',
        'event1.jpg',
        'event2.jpg'
         
      ];

      const awards = [
        'award2.png',
        'award3.png',
        'award4.png',
        'award5.png',
        'award6.png',
        'award7.png',
        'award8.png',
        'award9.png',
        'award10.png',
        'award11png'
         
      ];

    return(

<div>
        <Header/>

            <div className="flex justify-center">
                    <div className="mt-20   w-[1200px] h-[400px] text-center bg-yellow-200 rounded-3xl">
                                    <p className="text-5xl font-semibold mt-10">Acchoos Festival</p>
                                    <p className="text-8xl font-bold text-white mt-6">COMING SOON</p>
                                    <p className="text-6xl font-bold text-white mt-10">STAY TUNED!</p>

                </div>
            </div>


            <p className=" mt-20 text-6xl font-semibold text-center text-violet-600">Events</p>
            <Slider {...settings1} className="w-[88vw] m-auto mt-20">
                {events.map((imageName, index) => (
                    <div key={index} className="w-40 bg-gray-50 p-3 flex flex-col gap-1 rounded-2xl">
                            <div className="rounded-3xl">
                                <img
                                className="w-[300px] h-[240px]"
                                src={imageName}
                                alt="Image Alt Text"
                                 
                                />
                                </div>
                    </div>
                    ))}
            </Slider>
                            

            <p className=" mt-20 text-6xl font-semibold text-center text-violet-600">Events</p>

            <Slider {...settings} className="w-[88vw] m-auto mt-20">
                {awards.map((imageName, index) => (
                    <div key={index} className="w-40 bg-gray-50 p-3 flex flex-col gap-1 rounded-2xl">
                            <div className="rounded-3xl">
                                <img
                                className="w-[300px] h-[240px]"
                                src={imageName}
                                alt="Image Alt Text"
                                 
                                />
                                </div>
                    </div>
                    ))}
            </Slider>

            <div className=" absolute  ml-80 mt-10  ">
        <img className="w-[600px] h-[200px]" src="loadmore.png" alt=""/>
      </div>

      <div className="   h-[100px] bg-purple-400   relative  mt-48 ">
            <div className=" ">
              <div  className="sm:h-[300px] h-[200px] w-full bg-purple-400 rounded-b-full"
              style={{
                borderBottomLeftRadius: "100%",
                borderBottomRightRadius: "100%",
              }}>

                <div className="flex justify-between">
                <div className=" mt-8  w-[400px] h-[160px] ml-10 bg-white text-center">
                  <h2 className=" ">Track Your Order</h2>
                  <div className="  mt-4 text-blue-400">
                  <input
                type="search"
                className=" pl-2 pr-4 bg-white border-black mt-4  text-center border rounded-full sm:py-auto  py-2  px-10  text-sm outline-none"
                placeholder="Order number" 
              />
                  </div>
                  <div className="  mt-4">
                    <div className="  inset-y-0 left-0 flex items-center pl-3  "></div>
                    <input
                type="search"
                className=" pl-2 pr-4 bg-white border-black   text-center border rounded-full sm: py-2  px-10  text-sm outline-none"
                placeholder="Phone number" 
              />
                  </div>

                  
                </div>
                
              <div className="    sm:w-auto w-80     mt-4 mr-2 ">
                  <h4 className="font-bold sm:text-xl text-sm">Visit The Shop</h4>
                  <p className="sm:text-xl text-sm">
                    No 14/16, Gurunathan Street,
                  </p>
                  <p className="sm:text-xl text-sm">Pattabiraman Saalai Road,</p>
                  <p className="sm:text-xl text-sm">
                    Opp to srinivasa Perumal Koil, Tennur
                  </p>
                  <p className="sm:text-xl text-sm">Trichy – 620017.</p>
                </div>
                </div>
                <div className="flex justify-center mt-8 ">
              <p>
                <AiOutlineYoutube className=" text-white w-14 h-14 border rounded-full bg-black px-2 py-2" />
              </p>
              <p>
                <AiOutlineInstagram className=" text-white w-14 h-14 ml-4 border rounded-full bg-black px-2 py-2" />
              </p>
              <p>
                <IoLogoWhatsapp className="text-white w-14 h-14 ml-4 border rounded-full bg-black px-2 py-2" />
              </p>
            </div>
              </div>
              <div className="  flex justify-center  mt-4  ">
              <div className="overflow-hidden shadow-lg   ">
              <input
                type="email"
                className="w-[600px] pl-2 pr-4 bg-white border-black mt-4  text-left border rounded-full sm:py-auto  py-2  px-10  text-sm outline-none"
                placeholder="Email" 
              />
              </div>
  
              <button class="bg-purple-500 text-white px-4 py-2 rounded-lg transition duration-200 ease-in-out hover:bg-purple-700 active:bg-purple-900 focus:outline-none">
                Subscribe
               </button>
            </div>
           
           
            </div>
            
            <hr className="  border-2 border-black mt-12" />
        <div className="flex justify-between items-center    ">
              <div className="   m-auto  ">
                <img className="w-[400px] h-[150px]  ml-40 " src="/rose2.png" alt=""/>
              </div>
              <div className="">
                  <p className="sm:text-xl font-bold text-lg   mt-10   ">
                    *Terms And Conditions
                  </p>
              </div>
         
        </div>

        </div>

</div>
    )
}

export default Secretsofachoos