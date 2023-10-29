import {AiOutlineSearch} from "react-icons/ai"
 
import {PiHandWaving} from "react-icons/pi"


function Dashboard (){
    return(
        <div>


            <div>
                
          <div className= 'sm:flex justify-between   sm:w-[1100px] w-auto'>
                      <div className='flex ml-14 mt-8 b  '>
                      <p className='font-bold sm:ml-0 ml-20'>
                      Geetha Muthuselvan ,
                      </p>
                      <PiHandWaving className='   mt-1 '/> 


                      </div>
{/*                       
                      <div className="flex w-22 rounded-full sm:ml-0 ml-40  ">
                                                  <div className="     ">
                                                    <AiOutlineSearch className=" text-gray-500 sm:mt-5 mt-1 sm:mr-2 mr-1 " />
                                                  </div>
                                                  <input 
                                                    type="search"
                                                    placeholder="Search..."
                                                    className=" bg-indigo-950 "
                                                  />
                         </div> */}

</div>
            
            </div>

 
        </div>
    )
}
export default Dashboard