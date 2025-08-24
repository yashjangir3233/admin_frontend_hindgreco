import React, { useState } from 'react'
import { addUser } from '../../../services/usersApi';

const AddUser = ({onClose,type}) => {

    const [newUser,setNewUser] = useState({
        name:"",email:"",phone:'',address:"",long_lat:"",userType:type,userSubtype:"",serviceType:"",serviceItems:"",serviceTags:"",serviceBrans:"",otherDetail:"",password:"",dob:"",username:"",kycCard:"",memberType:"",mswDriver:"",userStatus:""
    });
    const handleAddUserChange = (e) => {
        setNewUser({...newUser,[e.target.name]:e.target.value});
    }
    const handleAddUserSubmit = async (e) => {
        e.preventDefault();
        const requiredFields = ['name', 'email', 'phone', 'long_lat', 'password', 'dob', 'username', 'kycCard', 'memberType', 'mswDriver', 'userStatus'];
        const emptyFields = requiredFields.filter(field => newUser[field] === "");
        if(emptyFields.length > 0) {
            alert(`please fill in all required fields ${emptyFields.join(", ")}`);
            return;
        }
        let res = await addUser(newUser);
        console.log(res);
        if(res.status === 200){
            alert(res.data.msg);
            window.location.reload();
            onClose();
        }else if(res.status === 400){
            alert(res.response.data.msg);
        }else{
            alert(res.response.data.error);
        }
    }
  return (
    <div className='fixed inset-0 text-white bg-opacity-30 flex justify-center items-center bg-black '>
        <div className="relative bg-[#fffefe] text-black p-[50px] rounded overflow-scroll">
            <h1 className='text-center mb-7 text-2xl font-semibold'>Add New User</h1>
            <div className='flex flex-col '>
                <div className="flex">
                    <div className="relative">
                        <p className={`absolute text-sm text-red-600 bg-white px-1 ${newUser.name === "" ? 'left-4 -top-1' : 'hidden'}`}>required</p>
                        <input name='name' type="text" className={`w-[200px] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md text-sm ${newUser.name === "" ? "border-red-600" : ""}`} placeholder='Name' onChange={handleAddUserChange} />
                    </div>
                    <div className="relative">
                        <p className={`absolute text-sm text-red-600 bg-white px-1 ${newUser.email === "" ? 'left-4 -top-1' : 'hidden'}`}>required</p>
                        <input name='email' type="text" className={`w-[200px] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md text-sm ${newUser.email === "" ? "border-red-600" : ""}`} placeholder='Email' onChange={handleAddUserChange} />
                    </div>

                    <div className="relative">
                        <p className={`absolute text-sm text-red-600 bg-white px-1 ${newUser.phone === "" ? 'left-4 -top-1' : 'hidden'}`}>required</p>
                        <input name='phone' type="number" className={`w-[200px] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md text-sm ${newUser.phone === "" ? "border-red-600" : ""}`} placeholder='Phone' onChange={handleAddUserChange} />
                    </div>
                    
                    <div className="relative">
                        <p className={`absolute text-sm text-red-600 bg-white px-1 ${newUser.long_lat === "" ? 'left-4 -top-1' : 'hidden'}`}>required</p>
                        <input name='long_lat' type="text" className={`w-[200px] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md text-sm ${newUser.long_lat === "" ? "border-red-600" : ""}`} placeholder='Long Lat' onChange={handleAddUserChange} />
                    </div>
                </div>
                <div className="flex">
                    <input name='userType' value={type} type="text" className=' bg-gray-200 cursor-not-allowed w-[31%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='User Type' disabled/>
                    <input name='userSubtype' type="text" className='w-[31%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='User Subtype' onChange={handleAddUserChange}/>
                    <input name='serviceType' type="text" className='w-[31%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Service Type' onChange={handleAddUserChange}/>
                </div>
                <input name='address' type="text" className='w-[97%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Address' onChange={handleAddUserChange}/>
                <div className='flex'>
                    <input name='serviceTags' type="text" className='w-[31%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Service Tags' onChange={handleAddUserChange}/>
                    <input name='serviceItems' type="text" className='w-[31%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Service Items' onChange={handleAddUserChange}/>
                    <input name='serviceBrands' type="text" className='w-[31%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Service Brands' onChange={handleAddUserChange}/>
                </div>
                <div className="flex gap-6">
                    <div className="relative w-[47%]">
                        <p className={`absolute text-sm text-red-600 bg-white px-1 ${newUser.password === "" ? 'left-4 -top-1' : 'hidden'}`}>required</p>
                        <input name='password' type="text" className={`w-full outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md text-sm ${newUser.password === "" ? "border-red-600" : ""}`} placeholder='Password' onChange={handleAddUserChange} />
                    </div>
                    <div className="relative w-[48%]">
                        <p className={`absolute text-sm text-red-600 bg-white px-1 ${newUser.dob === "" ? 'left-4 -top-1' : 'hidden'}`}>required</p>
                        <input name='dob' type="text" className={`w-full outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md text-sm ${newUser.dob === "" ? "border-red-600" : ""}`} placeholder='D.O.B' onChange={handleAddUserChange} />
                    </div>
                </div>
                <div className="flex gap-6">
                    <div className="relative w-[47%]">
                        <p className={`absolute text-sm text-red-600 bg-white px-1 ${newUser.username === "" ? 'left-4 -top-1' : 'hidden'}`}>required</p>
                        <input name='username' type="text" className={`w-full outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md text-sm ${newUser.username === "" ? "border-red-600" : ""}`} placeholder='Username' onChange={handleAddUserChange} />
                    </div>
                    <div className="relative w-[48%]">
                        <p className={`absolute text-sm text-red-600 bg-white px-1 ${newUser.kycCard === "" ? 'left-4 -top-1' : 'hidden'}`}>required</p>
                        <input name='kycCard' type="text" className={`w-full outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md text-sm ${newUser.kycCard === "" ? "border-red-600" : ""}`} placeholder='KYC Card' onChange={handleAddUserChange} />
                    </div>
                </div>
                <div className="flex">
                    <input name='otherDetail' type="text" className='w-[98%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Other Details' onChange={handleAddUserChange}/>
                </div>
                <div className="flex gap-5">
                    <div className="relative w-[31%]">
                        <p className={`absolute text-sm text-red-600 bg-white px-1 ${newUser.memberType === "" ? 'left-4 -top-1' : 'hidden'}`}>required</p>
                        <input name='memberType' type="text" className={`w-full outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md text-sm ${newUser.memberType === "" ? "border-red-600" : ""}`} placeholder='Member Type' onChange={handleAddUserChange} />
                    </div>
                    <div className="relative w-[31%]">
                        <p className={`absolute text-sm text-red-600 bg-white px-1 ${newUser.mswDriver === "" ? 'left-4 -top-1' : 'hidden'}`}>required</p>
                        <input name='mswDriver' type="text" className={`w-full outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md text-sm ${newUser.mswDriver === "" ? "border-red-600" : ""}`} placeholder='MSW Driver' onChange={handleAddUserChange} />
                    </div>
                    <div className="relative w-[31%]">
                        <p className={`absolute text-sm text-red-600 bg-white px-1 ${newUser.userStatus === "" ? 'left-4 -top-1' : 'hidden'}`}>required</p>
                        <input name='userStatus' type="text" className={`w-full outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md text-sm ${newUser.userStatus === "" ? "border-red-600" : ""}`} placeholder='User Status' onChange={handleAddUserChange} />
                    </div>
                </div>
            <div className='flex justify-between px-3'>
              <button className=' text-white bg-red-500 px-4 py-2 rounded-md w-[48%] hover:bg-red-400' onClick={onClose} >Cancel</button>
              <button className='px-4 py-2 bg-blue-500 text-white rounded-md w-[47%] hover:bg-blue-400' onClick={handleAddUserSubmit}>Add</button>
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default AddUser