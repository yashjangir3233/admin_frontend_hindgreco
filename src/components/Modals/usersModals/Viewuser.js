import React from 'react'
import QRCode from 'react-qr-code'

const Viewuser = ({data,onClose}) => {
  console.log(data);
  const qrData = {
    userId:data._id,
    name:data.name
  }
  const qrValue = JSON.stringify(qrData);
  return (
    <div className='fixed inset-0 text-white bg-opacity-30 flex justify-center items-center bg-black '>
        <div className="relative bg-[#fffefe] text-black p-[50px] rounded overflow-auto w-[60%]">
            <button onClick={onClose} className='border border-gray-500 text-gray-500 px-3 py-1 rounded-lg'> X </button>
            <h1 className='text-center mb-7 text-2xl font-semibold'>View User</h1>
            <div className=''>
                <div className="flex gap-7">
                    <div className="flex flex-col gap-6 w-[40%]">
                    <div className=""><label className='font-bold' htmlFor="">user Id: </label><span>{data._id}</span></div>
                    <div>
                    <label className='font-bold' htmlFor="">Email : </label><span>{data.email ? data.email : "null"}</span>
                    </div>
                    <div className="">
                    <label className='font-bold' htmlFor="">Phone: </label><span>{data.phone ? data.phone : "null"}</span>

                    </div>
                    <div className="">
                    <label htmlFor="" className='font-bold'>long lat: </label><span>{data.long_lat ? data.long_lat : "null"}</span>
                    </div>
                    <div>
                        <label htmlFor="" className="font-bold">User Type: </label><span>{data.userType ? data.userType:"null"}</span>
                    </div>
                    <div>
                        <label htmlFor="" className="font-bold">User Subtype: </label><span>{data.userSubtype ? data.userSubtype : "null"}</span>
                    </div>
                    <div>
                        <label htmlFor="" className="font-bold">Service Type: </label><span>{data.serviceType ? data.serviceType : "null"}</span>
                    </div>
                    </div>
                    <div className="flex flex-col gap-6 w-[40%]">

                    <div>
                        <label htmlFor="" className="font-bold">Service Items: </label><span>{data.serviceItems ? data.serviceItems : "null"}</span>
                    </div>
                    <div>
                        <label htmlFor="" className="font-bold">Service Tags: </label><span>{data.serviceTags ? data.serviceTags : "null"}</span>
                    </div>
                    <div>
                        <label htmlFor="" className="font-bold">Service Brands: </label><span>{data.serviceBrands ? data.serviceBrands : "null"}</span>
                    </div>
                    <div>
                        <label htmlFor="" className="font-bold">DOB: </label><span>{data.dob ? data.dob : "null"}</span>
                    </div>
                    <div>
                        <label htmlFor="" className="font-bold">Username: </label><span>{data.username ? data.username : "null"}</span>
                    </div>
                    </div>
                    <div className="flex flex-col gap-6 w-[40%]">
                    <div>
                        <label htmlFor="" className="font-bold">Kyc Card: </label><span>{data.kycCard ? data.kycCard : "null"}</span>
                    </div>
                    <div>
                        <label htmlFor="" className="font-bold">Member Type: </label><span>{data.memberType ? data.memberType : "null"}</span>
                    </div>
                    <div>
                        <label htmlFor="" className="font-bold">MSW Driver: </label><span>{data.mswDriver ? data.mswDriver : "null"}</span>
                    </div>
                    <div>
                        <label htmlFor="" className="font-bold">User Status: </label><span>{data.userStatus ? data.userStatus : "null"}</span>
                    </div>
                    <div>
                        <label htmlFor="" className="font-bold">Redeem Points: </label><span>{data.redeemPoints ? data.redeemPoints : "null"}</span>
                    </div>
                    </div>
                    
                    <div className='w-[40%]'>
                        <label htmlFor="" className="font-bold">Address: </label><span>{
                            data.address ? data.address : "null"}</span>
                    </div>
                    
                    
                    <div>
                        <label htmlFor="" className="font-bold">Other Details: </label><span>{data.otherDetail ? data.otherDetail : "null"}</span>
                    </div>
                    <div>
                        <label htmlFor="" className="font-bold">QR Code: </label><span><QRCode value={qrValue} /></span>
                    </div>
                    
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Viewuser