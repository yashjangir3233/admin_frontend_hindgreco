import React from 'react'

const ViewElectronic = ({data,onClose}) => {
  return (
    <div className='fixed inset-0 text-white bg-opacity-30 flex justify-center items-center bg-black '>
        <div className="relative bg-[#fffefe] text-black p-[50px] rounded overflow-auto w-[60%]">
            <button onClick={onClose} className='border border-gray-500 text-gray-500 px-3 py-1 rounded-lg'> X </button>
            <h1 className='text-center mb-7 text-2xl font-semibold'>View User</h1>
            <div className=''>
                <div className="flex gap-7">
                    <div className="flex flex-col gap-6 w-[40%]">
                    <div className=""><label className='font-bold' htmlFor="">Electronic Id: </label><span>{data._id}</span></div>
                    <div>
                    <label className='font-bold' htmlFor="">Name : </label><span>{data.name ? data.name : "null"}</span>
                    </div>
                    <div className="">
                    <label className='font-bold' htmlFor="">Brand: </label><span>{data.brand ? data.brand : "null"}</span>

                    </div>
                    </div>                  
                    <div className="flex flex-col gap-6 W-[40%]">
                        <div>
                            <label htmlFor="" className="font-bold">Tags: </label><span>{data.tags ? data.tags:"null"}</span>
                        </div>
                        <div>
                            <label htmlFor="" className="font-bold">year: </label><span>{data.year ? data.year : "null"}</span>
                        </div>
                        <div>
                            <label htmlFor="" className="font-bold">Price: </label><span>{data.price ? data.price : "null"}</span>
                        </div>
                    </div>
                    <div className='w-[40%]'>
                        <label htmlFor="" className="font-bold">Description: </label><span>{data.description ? data.description : "null"}</span>
                    </div>
                    
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default ViewElectronic