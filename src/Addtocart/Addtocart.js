function Addtocart(){
    return(
        <div className=" px-40 ml-80 rounded-lg w-[800px]    bg-purple-200">
            <div className="border bg-purple-600  flex justify-between ">
            <p className=" ">Cancel</p>
            <p className="  mx-auto">Add To Cart</p>
            </div>

        <div className="flex mt-10">
            <div>
                <img className="w-[150px] h-[150px]" src="ach8.jpg" alt=""/> 
            </div>

            <div className="ml-10">
                <p><span  className="font-bold">Fabric Type:</span> georgettle</p>
                <p><span className="font-bold">Print Name:</span> floral</p>
                <p><span className="font-bold">Color:</span> red</p>
                <p><span className="font-bold">Product Code:</span> ACHGA001</p>
                <p><span className="font-bold">Quantity: </span>5m</p>
                <p><span className="font-bold">Price:</span> RS.20000</p>
            </div>
        </div>
    
     <hr className="  border-1 border-black mt-12" />

        
     <div className="flex mt-10">
            <div>
                <img className="w-[150px] h-[150px]" src="ach8.jpg" alt=""/> 
            </div>

            <div className="ml-10">
                <p><span  className="font-bold">Fabric Type:</span> georgettle</p>
                <p><span className="font-bold">Print Name:</span> plain</p>
                <p><span className="font-bold">Color:</span> pink</p>
                <p><span className="font-bold">Product Code:</span> ACHGB001</p>
                <p><span className="font-bold">Quantity: </span>5m</p>
                <p><span className="font-bold">Price:</span> RS.25000</p>
            </div>
        </div>
     <hr className="  border-1 border-black mt-12" />
                <div>
                <p className="text-right">Total Price : <span className="underline">Rate</span></p>

                </div>
<div className="">
    
<div>
                <p>Delivery to</p>
                <label className="font-semibold" for="name">Name :</label>
                 <input className=" border border-black rounded-lg ml-8" type="text" id="name" name="name"/>

                 
            </div>

            <div className="mt-4">
                <label className="font-semibold" for="name">Mail ID :</label>
                 <input className="center border border-black rounded-lg ml-6" type="text" id="name" name="name"/>                 
            </div>

            <div className="mt-4">
                <label className="font-semibold" for="name">Address :</label>
                 <input className="border border-black rounded-lg ml-5 py-4 px-4" type="text" id="name" name="name"/>                 
            </div>

            <div className="mt-4">
                <label className="font-semibold" for="name">Phone :</label>
                 <input className="border border-black rounded-lg ml-8" type="text" id="name" name="name"/>                 
            </div>

</div>

<div className="mt-20">
    <p className="text-lg font-semibold">Get It By : </p>
<hr className="  border-1 border-black mt-4" />

<p className="text-lg font-semibold">Way To Paynment</p>
 
<h2 class="text-xl font-semibold mb-4">Select UPI Payment Option:</h2>

<label className="flex items-center mb-2 border border-purple-900 py-4 rounded-lg">
    <input type="checkbox" className="form-checkbox text-indigo-600  ml-4 " id="gpay" name="payment_option" value="gpay"/>
    <span class="ml-2">Google Pay UPI </span>
</label>

<label className="flex items-center mb-2 border border-purple-900 py-4 rounded-lg">
    <input type="checkbox" className="form-checkbox text-indigo-600  ml-4 " id="gpay" name="payment_option" value="gpay"/>
    <span class="ml-2">Phone Pay UPI</span>
</label>
<p className="text-sm ">No Cash on delivery</p>
<div className="mt-4 flex justify-center">
    <input type="submit" class="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-full   cursor-pointer" value="Place order"/>
</div>
 <p className="text-center text-lg text-pink-600">Continue Shopping</p>
</div>




        </div>

    )
}
export default Addtocart