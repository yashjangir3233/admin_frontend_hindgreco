import React from 'react'
import { useState } from 'react'
import { addTransaction } from '../../../services/transactionapi';

const Addtransaction = ({onClose}) => {
  const [newTransaction,setNewTransaction] = useState({
    reference_no:"",user_id:"",request_id:"",payment_type:"",amount:0,other_detail:""
  })

  const handleAddTransactionChange = (e) => {
    setNewTransaction({...newTransaction,[e.target.name]:e.target.value});
  }

  const handleAddTransactionSubmit = async (e) => {
    e.preventDefault();
    let result = await addTransaction(newTransaction);
    if(result.status === 200){
      alert(result.data.message);
    }else{
      alert(result.response.data.error);
    }
    window.location.reload();
  }
  return (
    <div className='fixed inset-0 text-white bg-opacity-30 flex justify-center items-center bg-black '>
        <div className="relative bg-[#fffefe] text-black p-[50px] rounded overflow-scroll">
            {/* <button onClick={onClose} className='pb-8'> X </button> */}
            <h1 className='text-center mb-7 text-2xl font-semibold'>Add New Transaction</h1>
            <div className='flex flex-col '>
                <div className="flex">
                    {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>User Id:</label> */}
                    <input name='reference_no' type="text" className='w-[200px] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Reference No.' onChange={handleAddTransactionChange}/>
                    {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>Request Type:</label> */}
                    <input name='payment_type' type="text" className='w-[200px] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Payment Type' onChange={handleAddTransactionChange}/>
                    {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>Service Name:</label> */}
                    <input name='amount' type="number" className='w-[200px] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Amount' onChange={handleAddTransactionChange}/>
                </div>
                <div className="flex">
                    {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>User Id:</label> */}
                    <input name='user_id' type="text" className='w-[48%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='User Id' onChange={handleAddTransactionChange}/>
                    {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>Request Type:</label> */}
                    <input name='request_id' type="text" className='w-[48%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Request Id' onChange={handleAddTransactionChange}/>
                </div>
                <div className="flex">
                    {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>Other Details:</label> */}
                    <input name='other_detail' type="text" className='w-[98%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='other details' onChange={handleAddTransactionChange}/>
                </div>
            <div className='flex justify-between px-3'>
              <button className=' text-white bg-red-500 px-4 py-2 rounded-md w-[48%] hover:bg-red-400' onClick={onClose} >Cancel</button>
              <button className='px-4 py-2 bg-blue-500 text-white rounded-md w-[47%] hover:bg-blue-400' onClick={handleAddTransactionSubmit}>Add</button>
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default Addtransaction