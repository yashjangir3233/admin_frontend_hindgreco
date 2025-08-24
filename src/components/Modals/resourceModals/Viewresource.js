import React from 'react'

const Viewresource = ({onClose,data}) => {
  return (
    <div className='fixed inset-0 text-white bg-opacity-30 flex justify-center items-center bg-black '>
            <div className="relative bg-[#fffefe] text-black p-[50px] rounded overflow-auto w-[60%]">
                <button onClick={onClose} className='border border-gray-500 text-gray-500 px-3 py-1 rounded-lg'> X </button>
                <h1 className='text-center mb-7 text-2xl font-semibold'>View Resource</h1>
                <div className=''>
                    <div className="flex gap-7">
                        <div className="flex flex-col gap-6 w-[40%]">
                        <div className=""><label className='font-bold' htmlFor="">Name : </label><span>{data.name ? data.name : "null"}</span></div>
                        <div>
                        <label className='font-bold' htmlFor="">Type of Resource: </label><span>{data.type_of_resource ? data.type_of_resource : "null"}</span>
                        </div>
                        </div>   
                        <div className=" flex flex-col gap-6 w-[40%]">
                        <div>
                            <label htmlFor="" className="font-bold">Current Price: </label><span>{data.current_price ? data.current_price:"null"}</span>
                        </div>
                        <div>
                            <label htmlFor="" className="font-bold">Last Price: </label><span>{data.last_price ? data.last_price : "null"}</span>
                        </div>
                        </div>           
                        <div>
                            <label htmlFor="" className="font-bold">Other Details: </label><span>{data.other_details ? data.other_details : "null"}</span>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </div>
  )
}

export default Viewresource