import Header from "../Header/Header"
import React, { useState } from 'react';
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
function Whatwedo(){
    const initialImages = [
        'ach1.jpg',
        'ach2.jpg',
        'ach3.jpg',
        'ach4.jpg',
        'ach5.jpg', // Additional images
        'ach6.jpg', // Additional images
        'ach7.jpg', // Additional images
        'ach8.jpg', // Additional images
        'ach1.jpg',
        'ach2.jpg',
        'ach3.jpg',
        'ach4.jpg',
        'ach1.jpg',
        'ach2.jpg',
        'ach3.jpg',
        'ach4.jpg',
        'ach5.jpg', // Additional images
        'ach6.jpg', // Additional images
        'ach7.jpg', // Additional images
        'ach8.jpg', // Additional images
        'ach1.jpg',
        'ach2.jpg',
        'ach3.jpg',
        'ach4.jpg'
      ];

      const [images, setImages] = useState(initialImages);
      const [showMore, setShowMore] = useState(false);
    
      const toggleImages = () => {
        setShowMore(!showMore);
      };
    return(
        <div>
            <Header/> 
            <div className="relative flex justify-center mt-20">
                <img className="w-[800px] h-[400px] border rounded-3xl" src="bg67.avif" alt="" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <div className="  w-[300px]  h-[180px] bg-white py-10 ">
                        <p className="text-4xl font-bold text-center">Offer</p>
                        <div className="flex justify-center">
                            <button class="w-[150px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
                            Shop Now
                            </button>
                        </div>
                        </div>
                    </div>
            </div>


            <div>

                <p className="text-4xl font-semibold text-center mt-10" >New Arrival</p>

            </div>

            <div className="flex justify-center gap-20 ">
                <div class="w-60    p-3 flex flex-col gap-1   ">
                    <div class="  ">
                        <img className="rounded-3xl" src="ach1.jpg"alt="Image Alt Text" />
                    </div>
                    <div className="text-center">
                        <p className="text-lg font-semibold">Ikkat Pochampally Sarees</p>
                        <button
                            class="bg-purple-500 text-white w-[120px] px-4 py-2 rounded-full transition duration-200 ease-in-out 
                            hover:bg-purple-700 active:bg-purple-900 focus:outline-none" > Add to cart 
                        </button>
                    </div>
                       
                   </div>

                   <div class="w-60    p-3 flex flex-col gap-1   ">
                    <div class="  ">
                        <img className="rounded-3xl" src="ach1.jpg"alt="Image Alt Text" />
                    </div>
                    <div className="text-center">
                        <p className="text-lg font-semibold">Ikkat Pochampally Sarees</p>
                        <button
                            class="bg-purple-500 text-white w-[120px] px-4 py-2 rounded-full transition duration-200 ease-in-out 
                            hover:bg-purple-700 active:bg-purple-900 focus:outline-none" > Add to cart 
                        </button>
                    </div>
                       
                   </div>

                   <div class="w-60    p-3 flex flex-col gap-1   ">
                    <div class="  ">
                        <img className="rounded-3xl" src="ach1.jpg"alt="Image Alt Text" />
                    </div>
                    <div className="text-center">
                        <p className="text-lg font-semibold">Ikkat Pochampally Sarees</p>
                        <button
                            class="bg-purple-500 text-white w-[120px] px-4 py-2 rounded-full transition duration-200 ease-in-out 
                            hover:bg-purple-700 active:bg-purple-900 focus:outline-none" > Add to cart 
                        </button>
                        
                    </div>
   
                   </div>

               </div>

               <div className=" ">
                      <img className="w-[150px] h-[200px]  absolute left-0" src="siderose.png" alt="" />
                </div>

                <div>
                    <p className="text-6xl text-semibold  text-center mt-40">Collections</p>
                </div>
                <div className="flex justify-center gap-4 flex-wrap mt-10">
      {images.slice(0, showMore ? images.length : 8).map((image, index) => (
        <div key={index} className="w-80 p-3 gap-1">
          <div>
            <img className="rounded-3xl" src={image} alt="Image Alt Text" />
          </div>
        </div>
      ))}
      {images.length > 4 && (
        <button
          onClick={toggleImages}
          className="bg-blue-500 text-white p-2 rounded-md mt-4"
        >
          {showMore ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>

          <div className="h-full bg-purple-400 " >
          <div className="h-full bg-purple-400 ">
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

                                <div className="  flex justify-center  mt-4  ">
                                <div className="overflow-hidden shadow-lg   ">
                                    <input
                                    type="text"
                                    className="pl-6 pr-4 py-2 border rounded-lg py-3 text-sm  focus:outline-none sm:w-96 w-20 "
                                    placeholder="Email"
                                    />
                                </div>
                    
                                <button
                                    class="bg-purple-500 text-white px-4 py-2 rounded-lg transition duration-200 ease-in-out hover:bg-purple-700 active:bg-purple-900 focus:outline-none"
                                    >
                                    Subscribe
                                    </button>
                                </div>
            </div>
           
                    <div className="h-full bg-purple-400   mt-20">
                    <hr className="  border-2 border-black mt-12 " />
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
         



        
 </div>

           
         
    )
}

export default Whatwedo