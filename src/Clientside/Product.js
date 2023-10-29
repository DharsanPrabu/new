function Product(){
    return(
        <div>
            
            <p className="text-4xl font-bold text-center w-[1140px]">Products</p>

        <div className="px-4">
                <div className="     bgcolor ">
                <p className="text-2xl text-white">All Products</p>

                <div className="mt-4">
                    <table className="    w-full text-white font-light">
                    <tr>
                        <th className="font-thin">Image</th>
                        <th className="font-thin">Title</th>
                        <th className="font-thin">Category</th>
                        <th className="font-thin">Price</th>
                        <th className="font-thin">Quantity</th>
                        <th className="font-thin">Update</th>
                        <th className="font-thin">Delete</th>
                    </tr>


                    </table>

                </div>
                 </div>
        </div>



        </div>
    )
}

export default Product