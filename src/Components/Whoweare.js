import { React, useEffect , useState} from "react";
import { createClient } from 'contentful';
import Header from "../Header/Header";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
 

function Whoweare(){



    const client = createClient({
        // Your Contentful configuration options here
        space: '9rxcz4v6yu9z',
        accessToken: '0apWNTMaCZG10KgxTWxd6bBd4CBrQ9LZgoH0gNMU9jk',
      });
  
      const [whoweare, setWhoweare] = useState('');
  
   

    

  

    return(

        <div>

            <Header></Header>
                <div className="mt-40">
                     <p className="text-4xl font-bold text-center">ACHOOS : </p>
                </div>
 
                <div className=" flex justify-center mt-6 ">
                    <p className=" text-lg  text-center w-[1000px]">Welcome to ACHOOS, your delightful online destination for exquisite floral-themed fabrics! We take 
                      immense pleasure in offering a mesmerizing array of fabrics that celebrate the beauty of nature. With petals, 
                      blooms, and blossoms adorning our textile treasures, we bring the allure of the garden into your creative 
                      designs. What sets us apart is not just our commitment to quality or our diverse selection, but the unique 
                      essence that flows through every thread and pattern we offer. Each fabric in our repertoire is carefully selected, 
                      ensuring it embodies the essence of elegance. Each fabric in our repertoire is carefully selected, ensuring it 
                      embodies the essence of elegance. With each stitch and every design, you've made our floral dreams blossom 
                      into reality. This marks a new chapter in our story, one where we can reach and inspire creative souls across 
                      the globe. Explore the garden of fabrics. imagination forever be in full bloom! </p>
                </div>

                <div className="flex justify-center items-center mt-8 ">
                  <img className="w-[500px] h-[100px] " src="rose1.png" alt=""/>
                </div>

                <div className="flex mt-32 justify-center">
                    <div className="">
                      
                      <img  className="w-[350px] h-[500px]" src="/achoos.jpg" alt=""/>
                    </div>
                    <div className="   justify-center mt-6 px-6 ">
                      <p className="text-4xl font-bold">Meet Geet a Mut uselvan : </p>
                    <p className=" text-xl  text-left  mt-10 font-semibold w-[700px]">In the gentle rustle of fabrics and the vibrant hues of blooming flowers, I 
found my calling. Hello, I am Geetha Muthuchelvan, the dreamer behind 
ACHOOS. My journey into the world of floral-themed fabrics began with 
a simple, profound passion for textiles. My journey is one of
dedication, and a profound love for the artistry of textiles. I started with 
completely out of passion. This all began with a dream, a dream to 
showcase the world our unique designs, to weave stories through petals 
and leaves, and to bring the elegance of florals to every 
creative endeavor. Every fabric you find here is a piece of my soul, care{"-"}fully curated by myself. For me, this venture is not just a business; it's a 
story of dreams nurtured into reality, of creativity taking flight on the 
wings of passion. I invite you to share this vision with me. Thank you for 
being part of this journey. Together, let’s weave our dreams. </p>
                </div>



                </div>



 
                <div className=" absolute  ml-80 mt-10  ">
        <img className="w-[600px] h-[200px]" src="loadmore.png" alt=""/>
      </div>

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
            </div>
              </div>
              <div className="  flex justify-center  mt-4  ">
              <div className="overflow-hidden shadow-lg   ">
              <input
                type="email"
                className="w-[600px] pl-2 pr-4 bg-white border-black mt-4  text-left border rounded-full sm:py-auto  py-2  px-10  text-sm outline-none"
                placeholder="Email" 
              />
              </div>
  
              <button class="bg-purple-500 text-white px-4 py-2 rounded-lg transition duration-200 ease-in-out hover:bg-purple-700 active:bg-purple-900 focus:outline-none">
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
    )
} 
export default Whoweare