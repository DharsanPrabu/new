import React, { useState } from 'react';


function Tops(){

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
 <div>


<div className="flex mt-10 gap-10">
                <img className="w-[200px] h-[200px] border border-red-900" src="ach1.jpg" alt=""/>
                <img className="w-[200px] h-[200px] border border-red-900" src="ach1.jpg" alt=""/>
              <img className="w-[200px] h-[200px] border border-red-900" src="ach1.jpg" alt=""/>
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
    )
}

export default Tops