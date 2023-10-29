import react, { useState } from 'react'
import {TbHexagonLetterO} from "react-icons/tb"
import {TbSquareKey} from "react-icons/tb"
import {MdKeyboardArrowRight} from "react-icons/md"
import {PiHandWaving} from "react-icons/pi"
import {BiDollarCircle} from "react-icons/bi"
import {AiOutlineArrowDown} from "react-icons/ai"
import {BsDatabaseCheck} from "react-icons/bs"
import {RiAccountBoxLine} from "react-icons/ri"
import {PiHeadsetDuotone} from "react-icons/pi"
import {LuBadgePercent} from "react-icons/lu"
import { HiMenu, HiX } from "react-icons/hi";

import {TbHelpSquare} from "react-icons/tb"

 import Dashboard from './Dashboard'
 import Addproduct from './Addproduct'
import Orders from './Orders'
import Help from './Help'
import Customers from './Customers'
import Product from './Product'


function Client(){
    const [projects, setProjects] = useState(0)

  const [activeClient, setActiveClient] = useState('dashboard');

  const handleClientChange = (clientsection) => {
    setActiveClient(clientsection);
  };
  
    return(
        <div className='flex'>
            
 
<div className="bg-blue-950 bgcolor pt-4       "  style={{width: "220px",height:"900px" }}>
              <div className='  pl-4 pt-2 '> 
                <p className='flex text-white text-lg font-md pr-14 '>
                  <div className='mt-2 mr-2'>
                <TbHexagonLetterO className=''/>
                </div>
                      Acchoos Client
                  </p>
              </div>
              <div className=" mt-20  cursor-pointer font-medium text-base text-2xl  ml-2   "> 
              
                        <div>
                            
                            <p   className={`${ activeClient === 'dashboard' ? ' ' : ''}`}onClick={() => handleClientChange('dashboard')}      >
                                    <p
                                className={`hover:bg-indigo-500 hover:text-white ${projects === 0 ? "text-white bg-indigo-500 bg-opacity-40 rounded-lg" : "text-gray-400 hove:bg-indigo-500"} w-48 h-8 pl-2 py-1 flex`} >
                                <TbSquareKey className='mt-1 mr-2' />
                                Dashboard
                                    </p>
                                
                            </p>
                    </div>

                        <div className='mt-6'>
                            
                                <p   className={`${ activeClient === 'product ' ? ' ' : ''}`}onClick={() => handleClientChange('product')}      >
                                    <p
                                    className={`hover:bg-indigo-500 hover:text-white ${projects === 0 ? "text-white bg-indigo-500 bg-opacity-40 rounded-lg" : "text-gray-400 hove:bg-indigo-500"} w-48 h-8 pl-2 py-1 flex`} >
                                    <TbSquareKey className='mt-1 mr-2' />
                                    products
                                    </p>
                                
                                </p>
                        </div>

                        <div  className='mt-6'>
                            
                            <p   className={`${ activeClient === 'customers' ? ' ' : ''}`}onClick={() => handleClientChange('customers')}      >
                                    <p
                                className={`hover:bg-indigo-500 hover:text-white ${projects === 0 ? "text-white bg-indigo-500 bg-opacity-40 rounded-lg" : "text-gray-400 hove:bg-indigo-500"} w-48 h-8 pl-2 py-1 flex`} >
                                <TbSquareKey className='mt-1 mr-2' />
                                Customers
                                    </p>
                                
                            </p>
                    </div>

                    <div  className='mt-6'>
                            
                            <p   className={`${ activeClient === 'orders' ? ' ' : ''}`}onClick={() => handleClientChange('orders')}      >
                                    <p
                                className={`hover:bg-indigo-500 hover:text-white ${projects === 0 ? "text-white bg-indigo-500 bg-opacity-40 rounded-lg" : "text-gray-400 hove:bg-indigo-500"} w-48 h-8 pl-2 py-1 flex`} >
                                <TbSquareKey className='mt-1 mr-2' />
                                Orders
                                    </p>
                                
                            </p>
                    </div>

                    <div  className='mt-6'>
                            
                            <p   className={`${ activeClient === 'addproduct' ? ' ' : ''}`}onClick={() => handleClientChange('addproduct')}      >
                                    <p
                                className={`hover:bg-indigo-500 hover:text-white ${projects === 0 ? "text-white bg-indigo-500 bg-opacity-40 rounded-lg" : "text-gray-400 hove:bg-indigo-500"} w-48 h-8 pl-2 py-1 flex`} >
                                <TbSquareKey className='mt-1 mr-2' />
                                Add Product
                                    </p>
                                
                            </p>
                    </div>

                    <div  className='mt-6'>
                            
                            <p   className={`${ activeClient === 'help' ? ' ' : ''}`}onClick={() => handleClientChange('help')}      >
                                    <p
                                className={`hover:bg-indigo-500 hover:text-white ${projects === 0 ? "text-white bg-indigo-500 bg-opacity-40 rounded-lg" : "text-gray-400 hove:bg-indigo-500"} w-48 h-8 pl-2 py-1 flex`} >
                                <TbSquareKey className='mt-1 mr-2' />
                                Help
                                    </p>
                                
                            </p>
                    </div>
                {/* <p className={ `hover:bg-indigo-500  hover:text-white    ${projects === 2 ? "text-white bg-indigo-500 bg-opacity-40   rounded-lg" : "text-gray-400 hove:bg-indigo-500"} 48 h-8 pl-2  py-1   flex mt-4  `} onClick={() => setProjects(2)}>
                  <RiAccountBoxLine className='mt-1 mr-2'/>
                Customers
                  <MdKeyboardArrowRight className='  ml-11 mt-1'/>
                </p> 
                <p className={ `hover:bg-indigo-500  hover:text-white    ${projects === 3 ? "text-white bg-indigo-500 bg-opacity-40   rounded-lg" : "text-gray-400 hove:bg-indigo-500"} 48 h-8 pl-2  py-1   flex mt-4 `} onClick={() => setProjects(3)}>
                  <PiHeadsetDuotone className='mt-1 mr-2'/>
                Orders
                  <MdKeyboardArrowRight className='  ml-16 mt-1'/>
                </p> 
                <p className={ `hover:bg-indigo-500  hover:text-white    ${projects === 4 ? "text-white bg-indigo-500 bg-opacity-40   rounded-lg" : "text-gray-400 hove:bg-indigo-500"} 48 h-8 pl-2  py-1   flex  mt-4`} onClick={() => setProjects(4)}>
                  <LuBadgePercent className='mt-1 mr-2'/>
                 Add Product
                  <MdKeyboardArrowRight className='  ml-14 mt-1'/>
                </p>    

                <p className={ `hover:bg-indigo-500  hover:text-white    ${projects === 4 ? "text-white bg-indigo-500 bg-opacity-40   rounded-lg" : "text-gray-400 hove:bg-indigo-500"} w-48 h-8 pl-2  py-1   flex  mt-4`} onClick={() => setProjects(4)}>
                  <TbHelpSquare className='mt-1 mr-2'/>
                 Help
                  <MdKeyboardArrowRight className='  ml-20 mt-1'/>
                </p> */}

              </div>
              {/* <div className='pl-2 flex cursor-pointer rounded-lg bg-opacity-40 w-48 h-12 ml-1  bg-indigo-300  pt-1  mb-60'>
                            <img src='./avatar.jpg' alt='Image Two' style={{ width: '25px', height: '25px', borderRadius: '50%', marginRight: '8px' }}className='' />
                            <div>
                              <p className='text-white text-sm '>Evano</p>
                              <p className=' text-gray-400 text-xs   '> Product&nbsp;Manager</p>
                            </div>
                            <MdKeyboardArrowRight className=' text-white mt-2 ml-4 '/>
                          </div> */}

                       
            </div>

            <div className='bg-blue-950'>
        {activeClient === 'dashboard' && <Dashboard />}
        {activeClient === 'product' && <Product/>}
        {activeClient === 'products' && <Addproduct/>}
        {activeClient === 'customers' && <Customers/>}
        {activeClient === 'orders' && <Orders/>}
        {activeClient === 'addproduct' && <Addproduct/>}
        {activeClient === 'help' && <Help/>}

        {/* {activeSection === 'skirts' && <Skirts />}
        {activeSection === 'tops' && <Tops />} */}
      </div>
        </div>
    )
}

export default Client