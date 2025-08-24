import React, { useState } from 'react'
import { getallRequests,addNewRequest } from '../../services/requestapis';

const AddRequest = ({onClose}) => {

    const [newRequest, setNewRequest] = useState({
        user_id:"",customer_address:"",request_type:"",service_name:"",replacement_part:"",type_of_waste:"",weight:"",quantity:"",scrap_material_one:"",scrap_material_two:"",scrap_material_three:"",scrap_material_four:"",scrap_material_five:"",vendor_type:"",vendor_id:"",other_detail:"",price:"",payment_method:"",transaction_number:"",status:"pending",
    });

    const handleAddRequestChange = (e) => {
        setNewRequest({...newRequest,[e.target.name]:e.target.value});
        console.log(newRequest);
    }
    const handleAddRequestSubmit = async (e) => {
        e.preventDefault();
        let result = await addNewRequest(newRequest);
        onClose();
        if(result.status === 200){
            alert('added successfully')
            window.location.reload();
        }else{
            alert(result.response.data.error);
        }
    }
  return (
    <div className='fixed inset-0 text-white bg-opacity-30 flex justify-center items-center bg-black '>
        <div className="relative bg-[#fffefe] text-black p-[50px] rounded overflow-scroll">
            {/* <button onClick={onClose} className='pb-8'> X </button> */}
            <h1 className='text-center mb-7 text-2xl font-semibold'>Add New Request</h1>
            <div className='flex flex-col '>
                <div className="flex">
                    {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>User Id:</label> */}
                    <input name='user_id' type="text" className='w-[200px] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='User Id' onChange={handleAddRequestChange}/>
                    {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>Request Type:</label> */}
                    <input name='request_type' type="text" className='w-[200px] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Request Type' onChange={handleAddRequestChange}/>
                    {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>Service Name:</label> */}
                    <input name='service_name' type="text" className='w-[200px] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Service Name' onChange={handleAddRequestChange}/>
                    <input name='replacement_part' type="text" className='w-[200px] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Replacement Part' onChange={handleAddRequestChange}/>
                </div>
                {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>Replacement Part:</label> */}
                {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>Type of Waste:</label> */}
                <div className="flex">
                    <input name='type_of_waste' type="text" className='w-[31%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Type of Waste' onChange={handleAddRequestChange}/>
                    {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>Weight:</label> */}
                    <input name='weight' type="text" className='w-[31%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Weight' onChange={handleAddRequestChange}/>
                    {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>Quantity:</label> */}
                    <input name='quantity' type="text" className='w-[31%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Quantity' onChange={handleAddRequestChange}/>
                </div>
                {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'> Customer Address:</label> */}
                <input name='customer_address' type="text" className='w-[97%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Customer Address' onChange={handleAddRequestChange}/>
                <div className='flex'>
                    {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>Scrap Material One:</label> */}
                    <input name='scrap_material_one' type="text" className='w-[31%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Scrap Material One' onChange={handleAddRequestChange}/>
                    {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>Scrap Material Two:</label> */}
                    <input name='scrap_material_two' type="text" className='w-[31%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Scrap Material Two' onChange={handleAddRequestChange}/>
                    {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>Scrap Material Three:</label> */}
                    <input name='scrap_material_three' type="text" className='w-[31%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Scrap Material Three' onChange={handleAddRequestChange}/>
                </div>
                <div className="flex">
                    {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>Scrap Material Four:</label> */}
                    <input name='scrap_material_four' type="text" className='w-[47%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Scrap Material Four' onChange={handleAddRequestChange}/>
                    {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>Scrap Material Five:</label> */}
                    <input name='scrap_material_five' type="text" className='w-[48%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Scrap Material Five' onChange={handleAddRequestChange}/>
                </div>
                <div className="flex">
                    {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>Vendor Type:</label> */}
                    <input name='vendor_id' type="number" className='w-[47%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Vendor Id' onChange={handleAddRequestChange}/>
                    {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>Vendor Id:</label> */}
                    <input name='vendor_type' type="text" className='w-[48%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Vendor Type' onChange={handleAddRequestChange}/>
                </div>
                <div className="flex">
                    {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>Other Details:</label> */}
                    <input name='other_detail' type="text" className='w-[98%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='other details' onChange={handleAddRequestChange}/>
                </div>
                <div className="flex">
                    {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>Price:</label> */}
                    <input name='price' type="text" className='w-[25%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Price' onChange={handleAddRequestChange}/>
                    {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>Payment Method:</label> */}
                    <input name='payment_method' type="text" className='w-[25%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Payment Method'  onChange={handleAddRequestChange}/>
                    {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>Transaction Number:</label> */}
                    <input name='transaction_number' type="text" className='w-[25%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Transaction Number' onChange={handleAddRequestChange}/>
                    {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>Status:</label> */}
                    <input name='status' type="text" className='w-[25%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Status' onChange={handleAddRequestChange}/>
                </div>
            <div className='flex justify-between px-3'>
              <button className=' text-white bg-red-500 px-4 py-2 rounded-md w-[48%] hover:bg-red-400' onClick={onClose} >Cancel</button>
              <button className='px-4 py-2 bg-blue-500 text-white rounded-md w-[47%] hover:bg-blue-400' onClick={handleAddRequestSubmit}>Add</button>
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default AddRequest