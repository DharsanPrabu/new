import Header from "../Header/Header"
import { React, useEffect , useState} from "react";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

function Primeblossoms(){

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

                <div className="flex justify-between mt-10 bg-violet-400 h-[400px]">
                    <img className="w-[100px] h-[200px] mt-20"  src="primeleft.png" alt=""/>
                    <div className="mt-32">
                    <p className="flex flex-col   text-5xl font-semibold text-white text-center">“Your Stars, Our Fabrics” </p>
                    <p  className=" flex flex-col   text-5xl font-semibold text-white   text-center">Where Celebrities Embrace Floral Fabrics</p>
                    </div>

                    <img className="w-[100px] h-[200px] mt-20" src="primeright.png" alt=""/>
                    
                </div>





                <div className="flex justify-center gap-20 flex-wrap mt-10">
      {images.slice(0, showMore ? images.length : 12).map((image, index) => (
        <div key={index} className="w-80 p-3 gap-1">
          <div>
            <img className="rounded-3xl" src={image} alt="Image Alt Text" />
          </div>
        </div>
      ))}
    
    </div>
    {images.length > 6 && (
        <div className="flex justify-center">
        <button
          onClick={toggleImages}
          className="bg-blue-500 text-white p-2 rounded-md    "
        >
          {showMore ? 'Close' : 'Loard More'}
        </button>
        </div>
      )}




      <div className=" absolute  ml-80 mt-10">
        <img className="w-[600px] h-[200px]" src="loadmore.png" alt=""/>
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

export default Primeblossoms