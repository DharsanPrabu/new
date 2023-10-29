import { React, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import { SlArrowRight } from "react-icons/sl";
import {
  AiOutlineArrowRight,
  AiTwotoneVideoCamera,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";
import { MdFormatListBulleted } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";


import { createClient } from 'contentful';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../Header/Header";
import Whoweare from "../Components/Whoweare";
 
 // import { EffectCoverflow, Pagination, Navigation } from "swiper";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;

  return (
    // <div
    //   className={className}
    //   style={{ ...style, display: "block", color: "red" }}
    //   onClick={onClick}
    // />
    <FaArrowAltCircleRight
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
    <FaArrowAltCircleLeft
      className={className}
      onClick={onClick}
      style={{ ...style, display: "block", color: "black" }}
    />
  );
}
 

function Home(){
  const navigate = useNavigate();

  


  const items = [
    {
      id: 1,
      name: 'Fabric 1',
      price: 25.99,
      image:'ach1.jpg'
    },
    {
      id: 2,
      name: 'Fabric 2',
      price: 30.99,
      image:'ach2.jpg'
    },
    {
      id: 3,
      name: 'Fabric 3',
      price: 25.99,
      image:'ach3.jpg'
    },
    {
      id: 4,
      name: 'Fabric 4',
      price: 30.99,
      image:'ach4.jpg'
    },
    {
      id: 5,
      name: 'Fabric 5',
      price: 25.99,
      image:'ach5.jpg'
    },
    {
      id: 6,
      name: 'Fabric 6',
      price: 30.99,
      image:'ach6.jpg'
    },
    {
      id: 6,
      name: 'Fabric 6',
      price: 30.99,
      image:'ach7.jpg'
    },
    {
      id: 6,
      name: 'Fabric 6',
      price: 30.99,
      image:'ach8.jpg'
    },
    {
      id: 6,
      name: 'Fabric 6',
      price: 30.99,
      image:'ach9.jpg'
    },

    // Add more items as needed
  ];
  
  const [itemQuantities, setItemQuantities] = useState(
    items.reduce((acc, item) => {
      acc[item.id] = 0;
      return acc;
    }, {})
  );

  const incrementQuantity = (itemId) => {
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: prevQuantities[itemId] + 1,
    }));
  };

  const decrementQuantity = (itemId) => {
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: Math.max(prevQuantities[itemId] - 1, 0),
    }));
  };
    
  
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };
 
    const [Blogs, setBlogs] = useState([]);

    var settings1 = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      // speed: 2000,
      autoplaySpeed: 2000,
      autoplay: true,
      autoplaySpeed: 2000,
    };
    var settings = {
      dots: true,
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

    var settings2 = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      // speed: 2000,
      autoplaySpeed: 2000,
      autoplay: false,
      autoplaySpeed: 2000,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    }

   



    return (

      
      <div>
      <Header></Header>
      <div>     
         <Slider {...settings1} className=" ">
        <div className="px-6 ">
          <p className="  rounded overflow-hidden shadow-lg cursor-pointer ">
            <img
              src="bg1.png"
              alt="Image Alt Text"
              // style={{ width: "auto", height: "auto" }}
            />
          </p>
        </div>
        <div className="px-6 ">
          <p className=" rounded overflow-hidden shadow-lg cursor-pointer"onClick={() => {navigate("/Saveadate")}}>
            <img className="w-[1400px] h-[500px]"
              src="bg4news.jpeg"
              alt="Image Alt Text"
              // style={{ width: "300px", height: "400px" }}
            />
          </p>
        </div>
        <div className="px-6 ">
          <p className="  rounded overflow-hidden shadow-lg cursor-pointer"onClick={() => {navigate("/Whatwedo")}}>
            <img
              src="bg3.png"
              alt="Image Alt Text"
              // style={{ width: "300px", height: "400px" }}
            />
          </p>
        </div>
        <div className="px-6 ">
          <p className="  rounded overflow-hidden shadow-lg cursor-pointer"onClick={() => {navigate("/Primeblossoms")}}>
            <img
              src="bg4.png"
              alt="Image Alt Text"
              // style={{ width: "300px", height: "400px" }}
            />
          </p>
        </div>
      </Slider>
      </div>
 
 
 
     

  
        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="3000"
        ></div>
           
           <div className="absolute  flex justify-between  w-full mt-10 ">
           <img className="   w-[250px] h-[200px]     " src="leftnews.png" alt=""/>
            <img className="  w-[250px] h-[200px]    float-right   " src="rightnews.png" alt=""/>
           </div>

  
        <div className=" text-4xl  w-auto px-10 sm:mt-40 mt-10   py-20 py-10"style={{ backgroundColor: "#B6ADFD"}}>
          <h3 className="sm:text-4xl text-sm text-center">
            Upload your own design
          </h3>
  
          <div className="sm:flex justify-center   pt-4   ">
            <div className="  sm:pl-4 pl-12 w-60 ">
              <label
                className="pl-4 pr-4   border rounded-full sm:py-4 py-2 text-sm cursor-pointer bg-white text-sm flex"
                for="resume"
              >
                <AiOutlineCloudUpload className="w-5 h-5 mr-3 " />
                 <p className="ml-10">Photos</p> 
              </label>
              <input
                id="resume"
                type="file"
                className=" w-0 h-0  "
                style={{ visibility: "hidden", pb: "0" }}
              />
            </div>
  
           
  
           
          </div>
        </div>
  
        <div className="flex justify-between">
          <div>
            <img className="w-[500px] h-[200px]    pr-72" src="leftnew.png" alt=""/>
          </div>
          <h3 className="sm:text-4xl text-sm text-center sm:pt-20 pt-10 ">
            {" "}
            Collections Avaiable
          </h3>
          <div>
            <img className="w-[400px] h-[200px]     pl-40" src="rightnew.png" alt=""/>
          </div>
        </div>
  
        <Slider {...settings} className="w-[88vw] m-auto">
  {items.map((item) => (
    <div key={item.id} className="w-60 bg-gray-50 p-3 flex flex-col gap-1 rounded-2xl">
      <img src={item.image} alt="ach" />
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <span className="text-xl font-bold">{item.name}</span>
          <p className="text-xs text-gray-700">ID: {item.id}</p>
        </div>
        <span className="font-bold text-red-600">${item.price}</span>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-row items-center gap-4">
          <button
            onClick={() => decrementQuantity(item.id)}
            className="text-white px-3 py-1 rounded-lg transition duration-200 ease-in-out hover:bg-purple-700 active:bg-purple-900 focus:outline-none"
            style={{ backgroundColor: "#B6ADFD" }}
          >
            -  
          </button>
          <span className="text-sm font-bold">{itemQuantities[item.id]} meters</span>
          <button
            onClick={() => incrementQuantity(item.id)}
            className="text-white px-3 py-1 rounded-lg transition duration-200 ease-in-out hover-bg-purple-700 active:bg-purple-900 focus:outline-none"
            style={{ backgroundColor: "#B6ADFD" }}
          >
            +  
          </button>
        </div>
        <button
          className="text-white px-4 py-2 rounded-lg transition duration-200 ease-in-out hover:bg-purple-700 active:bg-purple-900 focus:outline-none"
          style={{ backgroundColor: "#B6ADFD" }}
        >
          Add to cart
        </button>
      </div>
    </div>
  ))}
</Slider>


        
  
        <div className=" relative mt-20">
          <div className="  sm:h-[800px] h-400px    ">
            <div className="  h-[100px]      "style={{ backgroundColor: "#B6ADFD"}}>
              <h2 className="sm:text-6xl text-sm flex justify-center pt-4">
                Get in touch with us
              </h2>
  
              <div className="sm:flex justify-between ">
                <div className="sm:ml-40 ml-20   ">
                  <h3 className="sm:text-2xl text-sm sm:ml-3 ml-8">
                    Join Our Team
                  </h3>
  
                  <div className=" sm:mt-2 mt-1  w-48 ">
                    <label
                      className="pl-4 pr-4   border rounded-full sm:py-4 py-1 text-sm cursor-pointer bg-white text-sm flex"
                      for="resume"
                    >
                      <AiOutlineCloudUpload className="w-5 h-5 mr-3" />
                      Upload resume
                    </label>
                    <input
                      id="resume"
                      type="file"
                      className=" w-0 h-0  "
                      style={{ visibility: "hidden", pb: "0" }}
                    />
                  </div>
  
                  <div className="sm:ml-10 ml-4 ">
                  <button
                    class="  text-white px-4 py-2 rounded-full transition duration-200 ease-in-out hover:bg-purple-700 active:bg-purple-900 focus:outline-none"
                    style={{ backgroundColor: "#B6ADFD"}}>
                    Submit
                  </button>
                  </div>
                </div>
  
                <div className=" mr-20  sm:w-auto w-80   text-center sm:mt-0 mt-4">
                  <h4 className="font-bold sm:text-xl text-sm">Visit Our Shop</h4>
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
              
            </div>
            <p
              className="sm:h-[300px] h-[200px] w-full   rounded-b-full" 
              style={{
                backgroundColor: "#B6ADFD",
                borderBottomLeftRadius: "100%",
                borderBottomRightRadius: "100%",
              }}
            ></p>
            
          </div>

          
       
  
  
  
  
          <div className=" absolute     sm:top-80 top-80 sm:left-[20vw] left-[0vw]">
            <div className="  ">
             <div className="absolute">
              <img className="w-[200px] h-[200px]" src="violet rose.png"/>
             </div>
              <div className="flex justify-center      overflow-hidden shadow-lg sm:w-[800px] w-[300px] h-60   bg-white">
                <div className=" mt-8 ">
                  <h2 className="text-center">Track Your Order</h2>
                  <div className="  mt-4 text-blue-400">
                  <input
                type="search"
                className=" pl-2 pr-4 bg-white border-black mt-4  text-center border rounded-full sm:py-auto  py-2  px-10  text-sm outline-none"
                placeholder="Order number" 
              />
                  </div>
                  <div className="  mt-4">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3  "></div>
                    <input
                type="search"
                className=" pl-2 pr-4 bg-white border-black mt-4  text-center border rounded-full sm:py-auto  py-2  px-10  text-sm outline-none"
                placeholder="Phone number" 
              />
                  </div>
                  <div className="absolute   mb-20   right-0 bottom-0 ">
              <img className="w-[200px] h-[200px]" src="violet rose.png"/>
             </div>
                </div>
                
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
              <p>
                <HiOutlineMail className="text-white w-14 h-14 ml-4 border rounded-full bg-black px-2 py-2" />
              </p>
            </div>
            <div className="  flex justify-center  mt-4   ">
              <div className="overflow-hidden shadow-lg  border border-black rounded-lg ">
              <input
                                    type="text"
                                    className="pl-6 pr-4 py-2 border rounded-lg py-3 text-sm  focus:outline-none sm:w-96 w-20 "
                                    placeholder="Email"
                                    />
              </div>
  
              <div className="  mt-1   sm:w-40 w-24 sm:h-10  h-6   cursor-pointer ">
              <button
                  class="ml-4   text-white px-4 py-2 rounded-lg transition duration-200 ease-in-out hover:bg-purple-700 active:bg-purple-900 focus:outline-none"
                 style={{backgroundColor: "#B6ADFD"}}  >
                  Subscribe
              </button>
              </div>
              
            </div>
          </div>
        
        </div>
        <div className="  flex  justify-between px-4    ">    
                <p className="sm:text-md   text-lg  ">© Acchoos.com, All Right Reserved.</p>
                  <p className="sm:text-md   text-lg      ">
                    *Terms And Conditions
                  </p>            
        </div>
         
     


      </div>
    );
  }
  

export default Home