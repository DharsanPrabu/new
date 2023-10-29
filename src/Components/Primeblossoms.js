import Header from "../Header/Header"
import { React, useEffect , useState} from "react";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import Footer from "../Footer/Footer";

function Primeblossoms(){

    const initialImages = [
        'model1.jpg',
        'model2.jpg',
        'model5.jpg', // Additional images
        'model6.jpg', // Additional images
        'model7.jpg', // Additional images
        'model8.jpg', // Additional images
        'model5.jpg',
        'model9.jpg',
        'model1.jpg',
        'model6.jpg',
        'model1.jpg',
        'model5.jpg',
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

                <div className="flex justify-between mt-10   h-[400px]"style={{ backgroundColor: "#B6ADFD"}}>
                    <img className="w-[100px] h-[200px] mt-20"  src="primeleft.png" alt=""/>
                    <div className="mt-32">
                    <p className="flex flex-col   text-5xl font-semibold text-white text-center">“Your Stars, Our Fabrics” </p>
                    <p  className=" flex flex-col   text-5xl font-semibold text-white   text-center">Where Celebrities Embrace Floral Fabrics</p>
                    </div>

                    <img className="w-[100px] h-[200px] mt-20" src="primeright.png" alt=""/>
                    
                </div>




                <div className="flex justify-center gap-20 flex-wrap mt-10">
  {images.slice(0, showMore ? images.length : 12).map((image, index) => (
    <div key={index} className="w-80 p-3 gap-1 relative">
      <div className="relative">
        <div className="group">
          <img className="rounded-3xl" src={image} alt="Image Alt Text" />
          <div className="cursor-pointer absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-60 transition-opacity duration-300 bg-gray-50 backdrop-blur-md">
            <span className="text-purple-900  text-left text-5xl">Aavanya</span>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
{images.length > 6 && (
  <div className="flex justify-center">
    <button
      onClick={toggleImages}
      className="  text-white p-2 rounded-md"style={{ backgroundColor: "#B6ADFD"}}
    >
      {showMore ? 'Close' : 'Load More'}
    </button>
  </div>
)}






      <Footer/>

</div>
    )
}

export default Primeblossoms