import { React, useState } from "react";
import { FiLock} from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import { HiMenu, HiX } from "react-icons/hi";
function Header(){

    const navigate = useNavigate();

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    
    return(
        <div className="">
               <nav>
        <div className="flex justify-between ">
          <div className="flex sm:pl-16 pl-4 flex justify-between rounded-lg ">
            <p href="/">
              {" "}
                
              <img className="mr-10 mt-4 cursor-pointer "onClick={() => {navigate("/")}}
                src="Acchoos Logo.png"
                alt=""
                width="100px"
              />
            </p>

            <div className="pl-40 pt-4 mt-1 hidden md:flex space-x-10  text-black  font-bold  ">
              <p className="cursor-pointer hover:text-rose-600"onClick={() => {navigate("/Whoweare")}}>Who We Are</p>
              <p className="cursor-pointer hover:text-rose-600"onClick={() => {navigate("/Whatwedo")}} >What we have</p>
              <p className="cursor-pointer hover:text-rose-600"onClick={() => {navigate("/Saveadate")}} >Save a date</p>
              <p className="cursor-pointer hover:text-rose-600"onClick={() => {navigate("/Secretsofachoos")}} >Secrets of Acchoos</p>
              <p className="cursor-pointer hover:text-rose-600"onClick={() => {navigate("/Primeblossoms")}} >Prime Blooms</p>
              <p className="cursor-pointer hover:text-rose-600"onClick={() => {navigate("/Clientside")}} >Client</p>
              
            </div>
          </div>

          <div className="md:pl-0 md:hidden flex sm:mr-16 mr-4 pt-8">
            <div
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <HiX className="text-2xl text-black" />
              ) : (
                <HiMenu className="text-2xl text-black" />
              )}
            </div>
          </div>

          {/* Desktop  */} 
          <div className="hidden md:flex justify-end mt-3 mr-6">
          <button class="cursor-pointer inline-flex items-center rounded-full px-9 py-3 text-xl font-mono font-semibold text-rose-600 hover:text-white border-2 border-rose-600
          hover:bg-rose-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-75 hover:bg-rose-600 duration-300  focus:bg-transparent"onClick={() => {navigate("/Login")}}>
            Login<FiLock/>
          </button>
          </div>
        </div>

        {/* mobile */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 absolute z-40 w-full bg-white">
            <ul className="text-black p-4 py-8  ">
              <li>
                <p href="/vetting">Who We Are </p>
              </li>
              <li className="pt-8">
                <p href="/vetting">What we have</p>
              </li>
              <li className="pt-8">
                <p href="/blog">Save a date</p>
              </li>
              <li className="pt-8">
                <p href="/blog">Secrets of Acchoos</p>
              </li>
              <li className="pt-8">
                <p href="/blog">Prime Blooms</p>
              </li>
            
            </ul>
            <div className="  flex w-60 ml-4  pb-8 justify-center">
            <button class="cursor-pointer inline-flex items-center rounded-full px-9 py-3 text-xl font-mono font-semibold text-rose-600 hover:text-white border-2 border-rose-600
hover:bg-rose-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-75 hover:bg-rose-600 duration-300  focus:bg-transparent"onClick={() => {navigate("/Login")}}>
  Login<FiLock/>
</button>
            </div>
          </div>
        )}
      </nav>

      
        </div>
    )
}

export default Header