import React from 'react'

const Viewtransaction = ({onClose,data}) => {
  return (
    <div className='fixed inset-0 text-white bg-opacity-30 flex justify-center items-center bg-black '>
            <div className="relative bg-[#fffefe] text-black p-[50px] rounded overflow-auto w-[60%]">
                <button onClick={onClose} className='border border-gray-500 text-gray-500 px-3 py-1 rounded-lg'> X </button>
                <h1 className='text-center mb-7 text-2xl font-semibold'>View Request</h1>
                <div className=''>
                    <div className="flex gap-7">
                        <div className="flex flex-col gap-6 w-[40%]">
                        <div className=""><label className='font-bold' htmlFor="">Reference No. : </label><span>{data.reference_no ? data.reference_no : "null"}</span></div>
                        <div>
                        <label className='font-bold' htmlFor="">Payment Type: </label><span>{data.payment_type ? data.payment_type : "null"}</span>
                        </div>
                        <div className="">
                        <label className='font-bold' htmlFor="">Amount: </label><span>{data.amount ? data.amount : "null"}</span>
                        </div>
                        </div>   
                        <div className=" flex flex-col gap-6 w-[40%]">
                        <div>
                            <label htmlFor="" className="font-bold">User Id: </label><span>{data.user_id ? data.user_id:"null"}</span>
                        </div>
                        <div>
                            <label htmlFor="" className="font-bold">Request Id: </label><span>{data.request_id ? data.request_id : "null"}</span>
                        </div>
                        </div>           
                        <div>
                            <label htmlFor="" className="font-bold">Other Details: </label><span>{data.other_detail ? data.other_detail : "null"}</span>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </div>
  )
}

export default Viewtransaction