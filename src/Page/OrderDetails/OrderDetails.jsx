import TrackOrder from "./TrackOrder";


const OrderDetails = () => {


    return (
        
            <div className=" m-mt_16px">
                <div className="w-full flex flex-col lg:flex-row items-start justify-center h-full gap-2 ">
                    <div className="bg-white lg:p-p_30px w-full lg:w-[70%] ">
                        <div className="text-center  flex flex-col justify-center items-center ">
                            <p className="text-xl font-bold">Order Information</p>
                            <p className="p-3 rounded-md lg:my-2 my-1 w-fit border bg-[#D2C5A2] font-bold text-lg">
                                Order Id :
                                <span className="font-semibold">
                                  order id
                                </span>
                            </p>
                        </div>
                        <div className="w-full border flex flex-col md:flex-row md:items-start   md:mt-4 mt-3 bg-[#D2C5A2] rounded-md p-4  ">
                            <div className="md:text-base text-sm flex-1  font-semibold   md:border-r-2 md:border-black md:pr-10">
                                <p className="font-bold md:mb-4 w-full">Shipping Address</p>
                                <div className="space-y-1 w-full">
                                    <div className="flex items-center justify-between">
                                        <p>Full Name :</p>
                                        <p className="text-start">
                                            name
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p>Country :</p>
                                        <p>country</p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p>District Thana :</p>
                                        <p className="text-start">
                                            Thana
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p>Address :</p>
                                        <p>Address</p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p>Order Notes :</p>
                                        <p className="text-start">
                                            Order Notes
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p>Mobile :</p>
                                        <p>Mobile</p>
                                    </div>
                                </div>
                            </div>

                            <div className="md:text-base text-sm  flex-1 font-semibold  md:ml-10 mt-m_medium">
                                <p className="font-bold  md:mb-4 w-full">Order Summary</p>
                                <div className="space-y-1">
                                    <div className="flex items-center justify-between">
                                        <p>Subtotal Amount</p>
                                        <p>
                                           
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p>Shipping Charge</p>
                                        <p>
                                          
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p>Total Amount</p>
                                        <p>
                                           
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p>Due Amount</p>
                                        <p></p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p>Paid Amount</p>
                                        <p className="text-green-700">
                                          
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p>Payment Type</p>
                                        <p className="text-green-700">
                                           
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:my-8 md:my-6 my-8">
                            <p className=" md:my-2 font-semibold">Courses:</p>
                            <table className="overflow-x-auto border w-full">
                                <thead className="b w-full">
                                    <tr className="text-sm ">
                                        <th className="lg:w-20 md:w-16 w-8 py-2 md:py-4 lg:py-6 border ">
                                            Unit Image
                                        </th>
                                        <th className="lg:w-72 md:w-64 w-40 py-2 md:py-4 lg:py-6 border">
                                            Course Name
                                        </th>
                                        <th className="lg:w-72 md:w-64 w-40 py-2 md:py-4 lg:py-6 border">
                                            Unit Name
                                        </th>
                                        <th className="lg:w-20 md:w-20 w-16 py-2 md:py-4 lg:py-6 border">
                                            Quantity
                                        </th>
                                        <th className="lg:w-20 md:w-20 w-16  py-2 md:py-4 lg:py-6 border text-center">
                                            Unit Price
                                        </th>
                                        <th className="lg:w-20 md:w-20 w-16  py-2 md:py-4 lg:py-6 border text-center">
                                            Total
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="md:text-base text-sm font-semibold">
                                  
                                        <tr >
                                            <td className="border text-center w-10 h-12 px-2">
                                                <img
                                                    className=" w-full h-full object-cover mx-auto"
                                                    src=''
                                                    alt=''
                                                />
                                            </td>
                                            <td className="lg:py-6 md:py-4 py-2 text-center border">
                                               Course name
                                            </td>
                                            <td className="lg:py-6 md:py-4 py-2 text-center border">
                                               unit name
                                            </td>
                                            <td className="lg:py-6 md:py-4 py-2 text-center border">
                                               quantity
                                            </td>
                                            <td className="lg:py-6 md:py-4 py-2 text-center border">
                                               unit price
                                            </td>
                                            <td className="lg:py-6 md:py-4 py-2 text-center border">
                                               total price
                                            </td>
                                        </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="lg:w-[30%] w-full mx-auto 0">
                        <TrackOrder  />
                    </div>
                </div>
            </div>
    );
};

export default OrderDetails;