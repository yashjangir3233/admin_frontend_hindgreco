import React, { useState } from 'react'
import { updateTransaction } from '../../../services/transactionapi';

const Edittransaction = ({onClose,data}) => {
  const [editDetails,setEditDetails] = useState(data);

  const handleEditTransactionChange = (e) => {
    setEditDetails({...editDetails,[e.target.name]:e.target.value});
  }

  const handleEditTransactionSubmit = async (e) => {
    e.preventDefault();
    let res = await updateTransaction(editDetails,editDetails._id);
    if(res.status === 200){
      alert('updated successfully');
    }else{
      alert(res.response.data);
    }
    window.location.reload();
  }
  return (
    <div className='fixed inset-0 text-white bg-opacity-30 flex justify-center items-center bg-black '>
        <div className="relative bg-[#fffefe] text-black p-[50px] rounded overflow-scroll">
            {/* <button onClick={onClose} className='pb-8'> X </button> */}
            <h1 className='text-center mb-7 text-2xl font-semibold'>Update Transaction</h1>
            <div className='flex flex-col '>
                <div className="flex">
                    {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>User Id:</label> */}
                    <input name='reference_no' value={editDetails.reference_no} type="text" className='w-[200px] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Reference No.' onChange={handleEditTransactionChange}/>
                    {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>Request Type:</label> */}
                    <input name='payment_type' value={editDetails.payment_type} type="text" className='w-[200px] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Payment Type' onChange={handleEditTransactionChange}/>
                    {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>Service Name:</label> */}
                    <input name='amount' value={editDetails.amount} type="number" className='w-[200px] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Amount' onChange={handleEditTransactionChange}/>
                </div>
                <div className="flex">
                    {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>User Id:</label> */}
                    <input name='user_id' value={editDetails.user_id} type="text" className='w-[48%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='User Id' onChange={handleEditTransactionChange}/>
                    {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>Request Type:</label> */}
                    <input name='request_id' value={editDetails.request_id} type="text" className='w-[48%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Request Id' onChange={handleEditTransactionChange}/>
                </div>
                <div className="flex">
                    {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>Other Details:</label> */}
                    <input name='other_detail' value={editDetails.other_detail} type="text" className='w-[98%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='other details' onChange={handleEditTransactionChange}/>
                </div>
            <div className='flex justify-between px-3'>
              <button className=' text-white bg-red-500 px-4 py-2 rounded-md w-[48%] hover:bg-red-400' onClick={onClose} >Cancel</button>
              <button className='px-4 py-2 bg-blue-500 text-white rounded-md w-[47%] hover:bg-blue-400' onClick={handleEditTransactionSubmit}>Edit</button>
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default Edittransaction