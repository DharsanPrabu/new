import Header from "../Header/Header"
import React, { useState } from 'react';
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsCart4 } from "react-icons/bs";
import Footer from "../Footer/Footer";
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

      const [cartQuantities, setCartQuantities] = useState(images.map(() => 0));

  // Function to increment the cart quantity for a specific item
  const incrementCart = (index) => {
    const newQuantities = [...cartQuantities];
    newQuantities[index] += 1;
    setCartQuantities(newQuantities);
  };

  // Function to decrement the cart quantity for a specific item
  const decrementCart = (index) => {
    if (cartQuantities[index] > 0) {
      const newQuantities = [...cartQuantities];
      newQuantities[index] -= 1;
      setCartQuantities(newQuantities);
    }
  };


    return(
        <div>
            <Header/> 

            <div className="sm:absolute  sm:w-full w-[200px] sm:h-full   flex justify-between">
          <img className="w-[260px] h-[340px] ml-40 mt-24 rounded-t-full " src=" ach1.jpg"/>
          <img className="w-[260px] h-[340px] mr-40 mt-24 rounded-t-full " src=" ach4.jpg"/>

            </div>
        <div className="  flex justify-center  ">
          <img className="w-[1200px] h-600px]" src="new collection.jpeg"/>
        </div>
                 


            <div>

                <p id="arrival" className="text-4xl font-semibold text-center mt-10" >New Arrival</p>

            </div>

            <div className="flex justify-center gap-20 ">
            <div className="card">
  <div className="card-img">
  <img className="rounded-3xl  cursor-pointer" src="ach1.jpg"alt="Image Alt Text" />
    
  </div>
  <div className="card-info">
    <p className="text-title">Fabric</p>
    <p className="text-body">Product description and details</p>
  </div>
  <div className="card-footer">
  <span className="text-title">Rs.1000</span>
  <div className="card-button">
  <BsCart4/>
  </div>

</div>

            </div>
 
            <div class="card">
  <div className="card-img">
  <img className="rounded-3xl cursor-pointer" src="ach3.jpg"alt="Image Alt Text" />
    
  </div>
  <div className="card-info">
    <p className="text-title">Fabric</p>
    <p className="text-body">Product description and details</p>
  </div>
  <div className="card-footer">
  <span className="text-title">Rs.1000</span>
  <div className="card-button">
    <BsCart4/>
  </div>

</div>

            </div>

            <div className="card">
  <div className="card-img">
  <img className="rounded-3xl cursor-pointer" src="ach4.jpg"alt="Image Alt Text" />
    
  </div>
  <div class="card-info">
    <p class="text-title">Fabric</p>
    <p class="text-body">Product description and details</p>
  </div>
  <div class="card-footer">
  <span class="text-title">Rs.1000</span>
  <div class="card-button">
  <BsCart4/>
  </div>

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
          <div className="  mt-4">
           

           <div className="flex justify-between ">
             
           <div className="  ">
           <button
              onClick={() => decrementCart(index)}
              className="  text-white mt-1 px-2 py-1 rounded-md"style={{
                backgroundColor: "#B6ADFD"}}
            >
              -
            </button>
            <span className="p-2 text-sm">{cartQuantities[index]} meters</span>

            <button
              onClick={() => incrementCart(index)}
              className="  text-white  px-2 py-1 rounded-md"style={{
                backgroundColor: "#B6ADFD"}}
            >
              +
            </button>
           
           </div>
           <div>
            <button
                    class="    text-white px-4 py-2 rounded-lg transition duration-200 ease-in-out hover:bg-purple-700 active:bg-purple-900 focus:outline-none"
                    style={{
                      backgroundColor: "#B6ADFD"}} >
                    Add to cart
                  </button>
            </div>
           </div>

               

          </div>
        </div>
      ))}
      {images.length > 4 && (
        <button
          onClick={toggleImages}
          className="  text-white p-2 rounded-md mt-4"style={{
            backgroundColor: "#B6ADFD"}}
        >
          {showMore ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
       <Footer/>    
         



        
 </div>

           
         
    )
}

export default Whatwedo