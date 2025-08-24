import React from 'react'
import { useState } from 'react';
import { updateRequest } from '../../services/requestapis';

const EditRequest = ({onClose,data}) => {
    const [editDetails,setEditDetails] = useState(data);
    const handleEditRequestChange = (e) => {
        setEditDetails({...editDetails,[e.target.name]:e.target.value})
    }
    const handleEditRequestSubmit = async (e) => {
        e.preventDefault();
        let res = await updateRequest(editDetails,editDetails._id);
        console.log(res.response);
        onClose();
        if(res.status === 200){
            alert('updated successfully');
            window.location.reload();
        }else{
            alert(res.response.data.error);
        }
    }
    return (
        <div className='fixed inset-0 text-white bg-opacity-30 flex justify-center items-center bg-black '>
            <div className="relative bg-[#fffefe] text-black p-[50px] rounded overflow-scroll">
                {/* <button onClick={onClose} className='pb-8'> X </button> */}
                <h1 className='text-center mb-7 text-2xl font-semibold'>Edit Request</h1>
                <div className='flex flex-col'>
                    <div className="flex">
                        {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>User Id:</label> */}
                        <input name='user_id' value={editDetails.user_id} type="text" className='w-[200px] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='User Id' onChange={handleEditRequestChange}/>
                        {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>Request Type:</label> */}
                        <input name='request_type' value={editDetails.request_type} type="text" className='w-[200px] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Request Type' onChange={handleEditRequestChange}/>
                        {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>Service Name:</label> */}
                        <input name='service_name' value={editDetails.service_name} type="text" className='w-[200px] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Service Name' onChange={handleEditRequestChange}/>
                        <input name='replacement_part' value={editDetails.replacement_part} type="text" className='w-[200px] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Replacement Part' onChange={handleEditRequestChange}/>
                    </div>
                    {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>Replacement Part:</label> */}
                    {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>Type of Waste:</label> */}
                    <div className="flex">
                        <input name='type_of_waste' value={editDetails.type_of_waste} type="text" className='w-[31%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Type of Waste' onChange={handleEditRequestChange}/>
                        {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>Weight:</label> */}
                        <input name='weight' value={editDetails.weight} type="text" className='w-[31%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Weight' onChange={handleEditRequestChange}/>
                        {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>Quantity:</label> */}
                        <input name='quantity' value={editDetails.quantity} type="text" className='w-[31%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Quantity' onChange={handleEditRequestChange}/>
                    </div>
                    {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'> Customer Address:</label> */}
                    <input name='customer_address' value={editDetails.customer_address} type="text" className='w-[97%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Customer Address' onChange={handleEditRequestChange}/>
                    <div className='flex'>
                        {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>Scrap Material One:</label> */}
                        <input name='scrap_material_one' value={editDetails.scrap_material_one} type="text" className='w-[31%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Scrap Material One' onChange={handleEditRequestChange}/>
                        {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>Scrap Material Two:</label> */}
                        <input name='scrap_material_two' value={editDetails.scrap_material_two} type="text" className='w-[31%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Scrap Material Two' onChange={handleEditRequestChange}/>
                        {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>Scrap Material Three:</label> */}
                        <input name='scrap_material_three' value={editDetails.scrap_material_three} type="text" className='w-[31%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Scrap Material Three' onChange={handleEditRequestChange}/>
                    </div>
                    <div className="flex">
                        {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>Scrap Material Four:</label> */}
                        <input name='scrap_material_four' value={editDetails.scrap_material_four} type="text" className='w-[47%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Scrap Material Four' onChange={handleEditRequestChange}/>
                        {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>Scrap Material Five:</label> */}
                        <input name='scrap_material_five' value={editDetails.scrap_material_five} type="text" className='w-[48%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Scrap Material Five' onChange={handleEditRequestChange}/>
                    </div>
                    <div className="flex">
                        {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>Vendor Type:</label> */}
                        <input name='vendor_id' value={editDetails.vendor_id} type="text" className='w-[47%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Vendor Id' onChange={handleEditRequestChange}/>
                        {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>Vendor Id:</label> */}
                        <input name='vendor_type' value={editDetails.vendor_type} type="text" className='w-[48%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Vendor Type' onChange={handleEditRequestChange}/>
                    </div>
                    <div className="flex">
                        {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>Other Details:</label> */}
                        <input name='other_detail' value={editDetails.other_detail} type="text" className='w-[98%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='other details' onChange={handleEditRequestChange}/>
                    </div>
                    <div className="flex">
                        {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>Price:</label> */}
                        <input name='price' value={editDetails.price} type="text" className='w-[25%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Price' onChange={handleEditRequestChange}/>
                        {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>Payment Method:</label> */}
                        <input name='payment_method' value={editDetails.payment_method} type="text" className='w-[25%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Payment Method'  onChange={handleEditRequestChange}/>
                        {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>Transaction Number:</label> */}
                        <input name='transaction_number' value={editDetails.transaction_number} type="text" className='w-[25%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Transaction Number' onChange={handleEditRequestChange}/>
                        {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>Status:</label> */}
                        <input name='status' value={editDetails.status} type="text" className='w-[25%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Status' onChange={handleEditRequestChange}/>
                    </div>
                <div className='flex justify-between px-3'>
                  <button className=' text-white bg-red-500 px-4 py-2 rounded-md w-[48%] hover:bg-red-400' onClick={onClose} >Cancel</button>
                  <button className='px-4 py-2 bg-blue-500 text-white rounded-md w-[47%] hover:bg-blue-400' onClick={handleEditRequestSubmit}>Add</button>
                </div>
                </div>
                
            </div>
        </div>
      )
}

export default EditRequest