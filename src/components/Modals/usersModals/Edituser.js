import React, { useState } from 'react'
import { editUser } from '../../../services/usersApi';

const Edituser = ({onClose,data}) => {
    const [editDetails,setEditDetails] = useState(data);
    const handleEditUserChange = (e) => {
        setEditDetails({...editDetails,[e.target.name]:e.target.value});
    }
    const handleEditUserSubmit = async (e) => {
        e.preventDefault();
        let res = await editUser(editDetails,editDetails._id);
        if(res.status === 200){
            alert('successfully updated');
            window.location.reload();
            onClose();
        }
        else{
            alert(res.response.data.error);
        }
    }
  return (
    <div className='fixed inset-0 text-white bg-opacity-30 flex justify-center items-center bg-black '>
        <div className="relative bg-[#fffefe] text-black p-[50px] rounded overflow-scroll">
            {/* <button onClick={onClose} className='pb-8'> X </button> */}
            <h1 className='text-center mb-7 text-2xl font-semibold'>Edit User</h1>
            <div className='flex flex-col '>
                <div className="flex">
                    {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>User Id:</label> */}
                    <input name='name' value={editDetails.name} type="text" className='w-[200px] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Name' onChange={handleEditUserChange}/>
                    {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>Request Type:</label> */}
                    <input name='email' value={editDetails.email} type="text" className='w-[200px] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Email' onChange={handleEditUserChange}/>
                    {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>Service Name:</label> */}
                    <input name='phone' value={editDetails.phone} type="number" className='w-[200px] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Phone' onChange={handleEditUserChange}/>
                    <input name='long_lat' value={editDetails.long_lat} type="text" className='w-[200px] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Long Lat' onChange={handleEditUserChange}/>
                </div>
                {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>Replacement Part:</label> */}
                {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>Type of Waste:</label> */}
                <div className="flex">
                    <input name='userType' value={editDetails.userType} type="text" className='w-[31%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='User Type' onChange={handleEditUserChange}/>
                    {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>Weight:</label> */}
                    <input name='userSubtype' value={editDetails.userSubtype} type="text" className='w-[31%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='User Subtype' onChange={handleEditUserChange}/>
                    {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>Quantity:</label> */}
                    <input name='serviceType' value={editDetails.serviceType} type="text" className='w-[31%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Service Type' onChange={handleEditUserChange}/>
                </div>
                {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'> Customer Address:</label> */}
                <input name='address' type="text" value={editDetails.address} className='w-[97%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Address' onChange={handleEditUserChange}/>
                <div className='flex'>
                    {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>Scrap Material One:</label> */}
                    <input name='serviceTags' value={editDetails.serviceTags} type="text" className='w-[31%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Service Tags' onChange={handleEditUserChange}/>
                    {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>Scrap Material Two:</label> */}
                    <input name='serviceItems' value={editDetails.serviceItems} type="text" className='w-[31%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Service Items' onChange={handleEditUserChange}/>
                    {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>Scrap Material Three:</label> */}
                    <input name='serviceBrands' value={editDetails.serviceBrands} type="text" className='w-[31%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Service Brands' onChange={handleEditUserChange}/>
                </div>
                <div className="flex">
                    {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>Scrap Material Four:</label> */}
                    <input name='password' value={editDetails.password} type="text" className='w-[47%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Password' onChange={handleEditUserChange}/>
                    {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>Scrap Material Five:</label> */}
                    <input name='dob' value={editDetails.dob} type="text" className='w-[48%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='D.O.B' onChange={handleEditUserChange}/>
                </div>
                <div className="flex">
                    {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>Vendor Type:</label> */}
                    <input name='username' value={editDetails.username} type="text" className='w-[47%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Username' onChange={handleEditUserChange}/>
                    {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>Vendor Id:</label> */}
                    <input name='kycCard' value={editDetails.kycCard} type="text" className='w-[48%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='KycCard' onChange={handleEditUserChange}/>
                </div>
                <div className="flex">
                    {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>Other Details:</label> */}
                    <input name='otherDetail' value={editDetails.otherDetail} type="text" className='w-[98%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Other Details' onChange={handleEditUserChange}/>
                </div>
                <div className="flex">
                    {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>Price:</label> */}
                    <input name='memberType' value={editDetails.memberType} type="text" className='w-[35%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Member Type' onChange={handleEditUserChange}/>
                    {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>Payment Method:</label> */}
                    <input name='mswDriver' value={editDetails.mswDriver} type="number" className='w-[35%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='MSW driver'  onChange={handleEditUserChange}/>
                    {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>Transaction Number:</label> */}
                    <input name='userStatus' value={editDetails.userStatus} type="text" className='w-[35%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='User Status' onChange={handleEditUserChange}/>
                    {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>Status:</label> */}
                </div>
            <div className='flex justify-between px-3'>
              <button className=' text-white bg-red-500 px-4 py-2 rounded-md w-[48%] hover:bg-red-400' onClick={() => {onClose();setEditDetails({});}} >Cancel</button>
              <button className='px-4 py-2 bg-blue-500 text-white rounded-md w-[47%] hover:bg-blue-400' onClick={handleEditUserSubmit}>Edit</button>
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default Edituser