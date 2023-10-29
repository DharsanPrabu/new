import React, { useState } from 'react';



function Addproduct (){

    const [imageUrl, setImageUrl] = useState('');

  const handleImageInputChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleUploadImage = () => {
    // Handle image upload logic here
    // You can use the 'imageUrl' state to access the pasted URL
  };
    return(
 <div className='bg-blue-950'>
                <p className="text-4xl font-bold text-center   w-[1100px]">Add Products</p>

            
                    <div className="max-w-full mt-20  ml-20 ">
                            <div className="mb-4    ">
                                <input
                                type="text"
                                className="bg-blue-950 opacity-60 shadow appearance-none border border-black rounded  w-[1000px] py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Image URL"
                                value={imageUrl}
                                onChange={handleImageInputChange}
                                />


                        <div>
                        <input
                                type="text"
                                className="mt-6 bg-blue-950 opacity-60 shadow appearance-none border border-black rounded    py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Brand"/>

                            <input
                                type="text"
                                className="ml-4 bg-blue-950 opacity-60 shadow appearance-none border border-black rounded      py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Title" />
                        </div>


                         <div>

    
                            <input
                                type="text"
                                className="mt-6 bg-blue-950 opacity-60 shadow appearance-none border border-black rounded    py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Color"/>

                            <input
                                type="text"
                                className="ml-4 bg-blue-950 opacity-60 shadow appearance-none border border-black rounded      py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Quantity" />
                        </div>

                        <div>   
                                <input
                                    type="text"
                                    className="mt-6 bg-blue-950 opacity-60 shadow appearance-none border border-black rounded    py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="price"/>

                                <input
                                    type="text"
                                    className="ml-4 bg-blue-950 opacity-60 shadow appearance-none border border-black rounded      py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Discount Price" />
                        </div>

                        <div className="">
                                    <input
                                    type="text"
                                    className="w-[1000px] h-[80px]  mt-6 bg-blue-950 opacity-60 shadow appearance-none border border-black rounded    py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Description"
                                    />
                                                        
                        
                        </div>



                        <div className='flex'>
            
                                <div className="inputBox mt-8">
                                        <input className='border border-gray-900' placeholder="S" type="text" required="" readOnly/>
                                        <span className='text-white'> Size</span>     
                                        
                            
                                </div>
                                <div className="inputBox mt-8 ml-4">
                                        <input className='border border-gray-900 text-white' placeholder=" " type="text" required=""  />
                                        <span className='text-white   border-gray-900'> Quantity</span>     
                                        
                            
                                </div>
                        </div>

                        
                        <div className='flex'>
            
                                <div className="inputBox mt-8">
                                        <input className='border border-gray-900' placeholder="M" type="text" required="" readOnly/>
                                        <span className='text-white'> Size</span>     
                                        
                            
                                </div>
                                <div className="inputBox mt-8 ml-4">
                                        <input className='border border-gray-900 text-white' placeholder=" " type="text" required=""  />
                                        <span className='text-white   border-gray-900'> Quantity</span>     
                                        
                            
                                </div>
                        </div>

                        
                        <div className='flex'>
            
                                <div className="inputBox mt-8">
                                        <input className='border border-gray-900' placeholder="L" type="text" required="" readOnly/>
                                        <span className='text-white'> Size</span>     
                                        
                            
                                </div>
                                <div className="inputBox mt-8 ml-4">
                                        <input className='border border-gray-900 text-white' placeholder=" " type="text" required=""  />
                                        <span className='text-white   border-gray-900'> Quantity</span>     
                                        
                            
                                </div>
                        </div>
                                    


                                
              </div>

                        
            
     </div>

            <div className=' ml-20 mt-10'>
                    <button
                    class="bg-purple-600 text-white px-4 py-2 rounded-lg transition duration-200 ease-in-out hover:bg-purple-700 active:bg-purple-900 focus:outline-none"
                    >
                   Add To Product
                    </button>
            </div>



 </div>

        
    )
}
export default Addproduct