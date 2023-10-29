import { React, useEffect , useState} from "react";
import { createClient } from 'contentful';
import Header from "../Header/Header";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import Footer from "../Footer/Footer";
 

function Whoweare(){



    const client = createClient({
        // Your Contentful configuration options here
        space: '9rxcz4v6yu9z',
        accessToken: '0apWNTMaCZG10KgxTWxd6bBd4CBrQ9LZgoH0gNMU9jk',
      });
  
      const [whoweare, setWhoweare] = useState('');
  
   

    

  

    return(

        <div>

            <Header/> 
                <div className=" flex justify-center">
                  <img className="w-[300px] h-[100px] " src="Acchoos Logo.png"/>
                </div>
 
                <div className=" flex justify-center mt-6 ">
                    <p className=" text-lg  text-center w-[1000px]">Welcome to ACHOOS, your delightful online destination for all kind of exquisite fabrics! We take immense pleasure in offering a mesmerizing array of fabrics collections. 
                    Our commitment is to provide you with a diverse and high-quality selection to fuel your creativity on your designs. What sets us apart is not just our commitment to quality 
                    or our diverse selection, but the unique essence that flows through every thread and pattern we offer. Each fabric in our repertoire is carefully selected, 
                    ensuring it embodies the essence of elegance. Each fabric in our repertoire is carefully selected, ensuring it embodies the essence of elegance. With each stitch and every design, you've made our dreams blossom into reality. 
                    This marks a new chapter in our story, one where we can reach and inspire creative souls across the globe. 
                    Explore the garden of fabrics. imagination forever be in full bloom! </p>
                </div>

                <div className="flex justify-center items-center mt-8 ">
                  <img className="w-[500px] h-[100px] " src="rose1.png" alt=""/>
                </div>

                <div className="flex mt-32 justify-center">
                    <div className="">
                      
                      <img  className="w-[350px] h-[500px]" src="achoos.jpg" alt=""/>
                    </div>
                    <div className="   justify-center mt-6 px-6 ">
                      <p className="text-4xl font-bold">Meet Geetha Muthuselvan : </p>
                    <p className=" text-xl  text-left  mt-10 font-semibold w-[700px]">In the gentle rustle of fabrics and the vibrant hues of blooming flowers, I 
                      found my calling. Hello, I am Geetha Muthuselvan, the dreamer behind 
                      ACCHOOS. My journey into the world of floral-themed fabrics began with 
                      a simple, profound passion for textiles. My journey is one of
                      dedication, and a profound love for the artistry of textiles. I started with 
                      completely out of passion. This all began with a dream, a dream to 
                      showcase the world our unique designs, to weave stories through petals 
                      and leaves, and to bring the elegance of florals to every 
                      creative endeavor. Every fabric you find here is a piece of my soul, care{"-"}fully curated by myself. For me, this venture is not just a business; it's a 
                      story of dreams nurtured into reality, of creativity taking flight on the 
                      wings of passion. I invite you to share this vision with me. Thank you for 
                      being part of this journey. Together, let’s weave our dreams. 
                    </p>
                </div>



                </div>



  <Footer/>
             
        </div>
    )
} 
export default Whoweare