import React from "react";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";

function Footer(){
    return(
        <div className="relative border  mt-20  ">

<div className="  relative  ml-80   mt- 10   ">
<div className="h-[200px]   w-[600px] rounded-tl-full  rounded-tr-full overflow-hidden">
            <img className="w-full h-full mt-14" src="loadmore.png" alt="" />
          </div>
      </div>

      <div className="   h-[100px]     "style={{ backgroundColor: "#B6ADFD"}}>
            <div className=" ">
              <div  className="sm:h-[300px] h-[200px] w-full bg-purple-400 rounded-b-full " 
              style={{
                backgroundColor: "#B6ADFD",
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
              <p>
                <HiOutlineMail className="text-white w-14 h-14 ml-4 border rounded-full bg-black px-2 py-2" />
              </p>
              
            </div>
              </div>
              <div className="  flex justify-center  mt-4  ">
                                <div className="overflow-hidden shadow-lg border border-black rounded-lg  ">
                                    <input
                                    type="text"
                                    className="pl-6 pr-4 py-2 border rounded-lg py-3 text-sm  focus:outline-none sm:w-96 w-20 "
                                    placeholder="Email"
                                    />
                                </div>
                    
                                <button
                                    class="ml-4   text-white px-4 py-2 rounded-lg transition duration-200 ease-in-out hover:bg-purple-700 active:bg-purple-900 focus:outline-none"
                                    style={{
                                      backgroundColor: "#7539a7"}} >
                                    Subscribe
                                    </button>
                  </div>
           
           
           
            </div>
            
            {/* <hr className="  border-1 border-black mt-12" /> */}
        <div className="  flex  justify-between px-4    ">    
                <p className="sm:text-md   text-lg  ">© Acchoos.com, All Right Reserved.</p>
                  <p className="sm:text-md   text-lg      ">
                    *Terms And Conditions
                  </p>            
        </div>

        </div>

        </div>
    )
}

export default Footer