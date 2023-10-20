import Header from "../Header/Header";
import React, { useState } from 'react';
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
function Saveadate(){

    const [type, setType] = useState(0)
    const [types, setTypes] = useState(0)

    const handleTypeClick = (newType) => {
        setType(newType);
      };
      const handleTypesClick = (newTypes) => {
        setTypes(newTypes);
      };
    
    return(
 <div>

            <Header/>
            <div className="flex justify-between mt-10">
                <img className="w-[300px] h-[200px]" src="prime1.png" alt=""/>
                <div className="  h-14 rounded-full  ">
                <input
                type="search"
                className=" pl-2 pr-4 bg-violet-300 w-[600px] text-center border rounded-full sm:py-4 py-2  px-10  text-sm outline-none"
                placeholder="Customise your favourite" 
              />
                </div>
                <img className="w-[300px] h-[200px]" src="prime.png" alt=""/>
            </div>
        <p className="text-6xl font-semibold text-center">Customise Your Barbie </p>


<div className="flex justify-center  mt-20">
    <div>
        <img className="w-[300px] h-[400px]" src="design.png" alt=""/>
    </div>

        <div className=" ">
            <div className="  w-[500px] flex justify-center ml-20 items-center gap-8 rounded-full py-4 bg-violet-300">
            <button class="bg-white text-black px-4 py-2 rounded-full transition duration-200 ease-in-out hover:bg-purple-700 active:bg-purple-900 focus:outline-none">
           Tops
            </button>

            <button class="bg-white text-black px-4 py-2 rounded-full transition duration-200 ease-in-out hover:bg-purple-700 active:bg-purple-900 focus:outline-none">
           Skirts
            </button>

            <button class="bg-white text-black px-4 py-2 rounded-full transition duration-200 ease-in-out hover:bg-purple-700 active:bg-purple-900 focus:outline-none">
            Blouse
            </button>

            <button class="bg-white text-black px-4 py-2 rounded-full transition duration-200 ease-in-out hover:bg-purple-700 active:bg-purple-900 focus:outline-none">
            Click me
            </button>
                
            </div>
            <div className="flex mt-10 gap-10">
        <img className="w-[200px] h-[200px] border border-red-900" src="roseside.png" alt=""/>
        <img className="w-[200px] h-[200px] border border-red-900" src="roseside.png" alt=""/>
        <img className="w-[200px] h-[200px] border border-red-900" src="roseside.png" alt=""/>


        </div>
            <div className="">
                <p className="text-lg font-bold cursor-pointer">Type</p>
                <div className="flex text-sm font-semibold gap-4"> 

                <div className="flex gap-4"> 
                    <p className={`cursor-pointer ${type === 0 ? 'text-black-900 border border-black bg-white-600 rounded-lg px-2 opacity-50' : 'text-black-400' }`} onClick={() => handleTypeClick(0)}>
                        Short,
                    </p>
                    <p className={`cursor-pointer ${type === 1 ? 'text-black border border-black border-black bg-white-600 rounded-lg px-2 opacity-50' : 'text-black-400'      }`} onClick={() => handleTypeClick(1)} >
                        Long,
                    </p>
                    <p className={`cursor-pointer ${type === 2 ? 'text-black border border-black border-black bg-white-600 rounded-lg px-2 opacity-50' : 'text-black-400'       }`}onClick={() => handleTypeClick(2)}>
                        Western
                    </p>
             </div>

                </div>
            </div>
            <div>

                <p className="  text-lg font-bold ">Size</p>
                <div className="flex text-sm font-semibold gap-4"> 
                <p className={`cursor-pointer ${types === 0 ? 'text-black border border-black bg-white-600 rounded-lg px-2 opacity-50' : 'text-black-400' }`} onClick={() => handleTypesClick(0)}>S,</p>
                 <p className={`cursor-pointer ${types === 1 ? 'text-black border border-black border-black bg-white-600 rounded-lg px-2 opacity-50' : 'text-black-400'      }`} onClick={() => handleTypesClick(1)}>M,</p>
                  <p className={`cursor-pointer ${types === 2 ? 'text-black border border-black border-black bg-white-600 rounded-lg px-2 opacity-50' : 'text-black-400'       }`}onClick={() => handleTypesClick(2)}>L,</p>
                   <p className={`cursor-pointer ${types === 3 ? 'text-black border border-black border-black bg-white-600 rounded-lg px-2 opacity-50' : 'text-black-400'       }`}onClick={() => handleTypesClick(3)}>XL,</p> 
                   <p className={`cursor-pointer ${types === 4 ? 'text-black border border-black-900 border-black  bg-white-600 rounded-lg px-2 opacity-50' : 'text-black-400'       }`}onClick={() => handleTypesClick(4)}>2XL</p>
                </div>

                <p className="  text-lg font-bold">Color</p>
                <div className="flex text-sm font-semibold gap-4"> 
                <p className="cursor-pointer border rounded-full px-3 py-2 bg-red-400"> </p> <p className=" cursor-pointer border rounded-full px-3 py-2 bg-black">  </p> <p className=" cursor-pointer border rounded-full px-3 py-2 bg-pink-600"></p> <p className="cursor-pointer border rounded-full px-3 py-2 bg-green-500"></p> <p className="cursor-pointer border rounded-full px-3 py-2 bg-yellow-500"></p><p className="cursor-pointer border rounded-full px-3 py-2 bg-blue-600"></p>
                </div>


            </div>


        </div>



</div>

<div className="pt-40">

<div className=" absolute  ml-80 mt-10  ">
        <img className="w-[600px] h-[200px]" src="loadmore.png" alt=""/>
      </div>
</div>

      <div>

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
                      type="text"
                      className="pl-6 pr-4  border rounded-full py-2 text-sm bg-purple-400 text-black focus:outline-none  sm:w-auto w-40"
                      placeholder="Order Number"
                    />
                  </div>
                  <div className="  mt-4">
                    <div className="  inset-y-0 left-0 flex items-center pl-3  "></div>
                    <input
                      type="text"
                      className="pl-6 pr-4  border rounded-full py-2 text-sm text-black bg-purple-400  focus:outline-none sm:w-auto w-40"
                      placeholder="Phone Number"
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


</div>
    )
}

export default Saveadate