



import Header from "../Header/Header"
import Slider from "react-slick";
import React, { useEffect, useState } from 'react';
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdArrowForwardIos, MdArrowBackIosNew  } from "react-icons/md";
import Footer from "../Footer/Footer";



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
 
  
function Saveadate(){


    const [days,setdays]= useState(0)
    const [hours,sethours]= useState(0)
    const [mins,setmins]= useState(0)
    const [sec,setsec]= useState(0)

    const deadline = "november,22,2023"

    const getTime = () => {
        const time = Date.parse(deadline)-Date.now()
        setdays(Math.floor(time / (1000 * 60 * 60 * 24)));
       sethours(Math.floor(time / (1000 * 60 * 60)));
       setmins(Math.floor((time/1000/60)%60)) 
       setsec(Math.floor((time/1000)%60)) 

    }

    useEffect(() =>{
        const interval = setInterval(()=>getTime(deadline),1000)
        return () => clearInterval(interval)


    },[])

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

     <div className=" container">
     <div className="flex justify-center gap-20 mt-20">

            <div className="text-center">
                    <div className="flex items-center justify-center">
                        <div className="text-white bg-gray-600 rounded-lg text-3xl border-4 border-black w-[50px] h-[80px] relative">
                            <span className="absolute inset-0 flex items-center justify-center">
                                <span className="text-2xl">{days < 10 ? " 0"   : days.toString()[0]}</span>
                            </span>
                        </div>
                        <div className="text-white bg-gray-600 rounded-lg text-3xl border-4 border-black w-[50px] h-[80px] relative ml-2">
                            <span className="absolute inset-0 flex items-center justify-center">
                                <span className="text-2xl">
                                    {days < 10 ? + days : days.toString()[1]}
                                </span>
                            </span>
                        </div>
                    </div>
                    <p className="text">Days</p>
            </div>
<div className="text-center">
        <div className="flex items-center justify-center">
            <div className="text-white bg-gray-600 rounded-lg text-3xl border-4 border-black w-[50px] h-[80px] relative">
                <span className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl"> {hours < 10 ? "0"   : hours.toString()[0]}</span>
                </span>
            </div>
            <div className="text-white bg-gray-600 rounded-lg text-3xl border-4 border-black w-[50px] h-[80px] relative ml-2">
                <span className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl">
                        {hours < 10 ? " " + hours  : hours.toString()[1]}
                    </span>
                </span>
            </div>
        </div>
        <p className="text">Hours</p>
</div>

<div className="text-center">
        <div className="flex items-center justify-center">
            <div className="text-white bg-gray-600 rounded-lg text-3xl border-4 border-black w-[50px] h-[80px] relative">
                <span className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl">{mins < 10 ? "0" : mins.toString()[0]}</span>
                </span>
            </div>
            <div className="text-white bg-gray-600 rounded-lg text-3xl border-4 border-black w-[50px] h-[80px] relative ml-2">
                <span className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl">
                        {mins <= 1 ? " "  + mins : mins.toString()[1]}
                    </span>
                </span>
            </div>
        </div>
        <p className="text">Minutes</p>
</div>

<div className="text-center">
        <div className="flex items-center justify-center">
            <div className="text-white bg-gray-600 rounded-lg text-3xl border-4 border-black w-[50px] h-[80px] relative">
                <span className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl">{sec < 10 ? " 0"  : sec.toString()[0]}</span>
                </span>
            </div>
            <div className="text-white bg-gray-600 rounded-lg text-3xl border-4 border-black w-[50px] h-[80px] relative ml-2">
                <span className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl">
                        {sec < 10 ? "" + sec: sec.toString()[1]}
                    </span>
                </span>
            </div>
        </div>
        <p className="text">Seconds</p>
</div>




</div>
                
      </div>

            <p className=" mt-20 text-6xl font-semibold text-center text-violet-600">Events</p>
            <Slider {...settings1} className="w-[88vw] m-auto mt-20">
                {events.map((imageName, index) => (
                   <div className="px-2">
 <div key={index} className="  bg-gray-50 p-3 flex flex-col gap-1 rounded-2xl border border-purple-500">
                            <div className="rounded-3xl">
                                <img
                                className="w-[300px] h-[240px]"
                                src={imageName}
                                alt="Image Alt Text"
                                 
                                />
                                </div>
                    </div>

                   </div>
                    ))}
            </Slider>
                            

            <p className=" mt-20 text-6xl font-semibold text-center text-violet-600">Awards</p>

            <Slider {...settings} className="w-[88vw] m-auto mt-20  ">
                {awards.map((imageName, index) => (
                 <div className="px-1">

                               <div key={index} className=" bg-gray-50 p-3 flex flex-col gap-1 rounded-lg border border-purple-500 ">
                                      <div className="rounded-3xl ">
                                          <img
                                          className="w-[300px] h-[240px]  "
                                          src={imageName}
                                          alt="Image Alt Text"
                                          
                                          />
                                          </div>
                              </div>
                 </div>
                    ))}
            </Slider>

        <Footer/>

</div>
    )
}

export default Saveadate