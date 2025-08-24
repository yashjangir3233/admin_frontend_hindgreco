import React from 'react'

const ViewRequest = ({onClose,data}) => {
    console.log(data);
    return (
        <div className='fixed inset-0 text-white bg-opacity-30 flex justify-center items-center bg-black '>
            <div className="relative bg-[#fffefe] text-black p-[50px] rounded overflow-auto w-[60%]">
                <button onClick={onClose} className='border border-gray-500 text-gray-500 px-3 py-1 rounded-lg'> X </button>
                <h1 className='text-center mb-7 text-2xl font-semibold'>View Request</h1>
                <div className=''>
                    <div className="flex gap-7">
                        <div className="flex flex-col gap-6 w-[40%]">
                        <div className=""><label className='font-bold' htmlFor="">user Id: </label><span>{data.user_id}</span></div>
                        <div>
                        <label className='font-bold' htmlFor="">Request Type: </label><span>{data.request_type ? data.request_type : "null"}</span>
                        </div>
                        <div className="">
                        <label className='font-bold' htmlFor="">Service name: </label><span>{data.service_name ? data.service_name : "null"}</span>

                        </div>
                        <div className="">
                        <label htmlFor="" className='font-bold'>Replacement Part: </label><span>{data.replacement_part ? data.replacement_part : "null"}</span>
                        </div>
                        <div>
                            <label htmlFor="" className="font-bold">Type of Waste: </label><span>{data.type_of_waste ? data.type_of_waste:"null"}</span>
                        </div>
                        <div>
                            <label htmlFor="" className="font-bold">Weight: </label><span>{data.weight ? data.weight : "null"}</span>
                        </div>
                        <div>
                            <label htmlFor="" className="font-bold">Quantity: </label><span>{data.quantity ? data.quantity : "null"}</span>
                        </div>
                        </div>
                        <div className="flex flex-col gap-6 w-[40%]">

                        <div>
                            <label htmlFor="" className="font-bold">Vendor Id: </label><span>{data.vendor_id ? data.vendor_id : "null"}</span>
                        </div>
                        <div>
                            <label htmlFor="" className="font-bold">Vendor Type: </label><span>{data.vendor_type ? data.vendor_type : "null"}</span>
                        </div>
                        <div>
                            <label htmlFor="" className="font-bold">Price: </label><span>{data.price ? data.price : "null"}</span>
                        </div>
                        <div>
                            <label htmlFor="" className="font-bold">Payment Method: </label><span>{data.payment_method ? data.payment_method : "null"}</span>
                        </div>
                        <div>
                            <label htmlFor="" className="font-bold">Transaction Number: </label><span>{data.transaction_number ? data.transaction_number : "null"}</span>
                        </div>
                        <div>
                            <label htmlFor="" className="font-bold">Status: </label><span>{data.status ? data.status : "null"}</span>
                        </div>
                        </div>
                        <div className="flex flex-col gap-6 w-[40%]">
                        <div>
                            <label htmlFor="" className="font-bold">Scrap Material One: </label><span>{data.scrap_material_one ? data.scrap_material_one : "null"}</span>
                        </div>
                        <div>
                            <label htmlFor="" className="font-bold">Scrap Material Two: </label><span>{data.scrap_material_two ? data.scrap_material_two : "null"}</span>
                        </div>
                        <div>
                            <label htmlFor="" className="font-bold">Scrap Material Three: </label><span>{data.scrap_material_three ? data.scrap_material_three : "null"}</span>
                        </div>
                        <div>
                            <label htmlFor="" className="font-bold">Scrap Material Four: </label><span>{data.scrap_material_four ? data.scrap_material_four : "null"}</span>
                        </div>
                        <div>
                            <label htmlFor="" className="font-bold">Scrap Material Five: </label><span>{data.scrap_material_five ? data.scrap_material_five : "null"}</span>
                        </div>
                        </div>
                        
                        <div className='w-[40%]'>
                            <label htmlFor="" className="font-bold">Customer Address: </label><span>{
                                data.customer_address ? data.customer_address : "null"}</span>
                        </div>
                        
                        
                        <div>
                            <label htmlFor="" className="font-bold">Other Details: </label><span>{data.other_detail ? data.other_detail : "null"}</span>
                        </div>
                        
                    </div>
                {/* <div className='flex justify-between px-3'>
                  <button className=' text-white bg-red-500 px-4 py-2 rounded-md w-[48%] hover:bg-red-400' onClick={onClose} >Cancel</button>
                  <button className='px-4 py-2 bg-blue-500 text-white rounded-md w-[47%] hover:bg-blue-400' onClick={handleEditRequestSubmit}>Add</button>
                </div> */}
                </div>
                
            </div>
        </div>
      )
}

export default ViewRequest