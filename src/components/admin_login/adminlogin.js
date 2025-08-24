import React, { useEffect } from 'react'
import { useState } from 'react'
import { adminloginapi } from '../../services/adminloginapi'

const Adminlogin = ({onLogin}) => {
  const [loginDetails,setLoginDetails] = useState({
    Username:'',
    Password:''
  })
  const handleChange = (e) => {
    setLoginDetails({...loginDetails,[e.target.name]:e.target.value})
    console.log(loginDetails);
  }

  // useEffect(() => {
  //   let token = localStorage.getItem('accessToken')
  //   if(token){

  //   }
  // })

  const handleLogin = async (e) => {
    e.preventDefault();
    let res = await adminloginapi(loginDetails);
    if(res.status === 200){
      alert('login successful');
      localStorage.setItem('accessToken',`Bearer ${res.data.accessToken}`);
      localStorage.setItem('refreshToken',`Bearer ${res.data.refreshToken}`);
      onLogin();
    }else if(res.response.status === 400){
      alert(res.response.data.msg);
    }else{
      alert(res.response.data.error);
    }
  }
  return (
    <div className='inline-block rounded-lg border border-gray-300 ml-[38%] mt-[12%]'>
        <div className='flex flex-col items-center bg-gray-200 pt-7 pb-4 rounded-lg'>
            <h1 className='text-2xl mb-3'>Login Administrator</h1>
            <h1>Kymtee Backend</h1>
        </div>
        <div className='flex flex-col'>
            <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>Username:</label>
            <input name='Username' type="text" className='w-[370px] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' onChange={handleChange}/>
            <label htmlFor="" className='ml-3 mr-3 font-semibold'>Password:</label>
            <input name='Password' type="password" className='w-[370px] outline-none border border-gray-400 h-8 ml-3 mr-3 p-2 mt-2 mb-4 rounded-md' onChange={handleChange} />
            
        </div>
        <div className='flex flex-col items-end p-3'>
            <button className='bg-blue-500 text-white w-[70px] h-[30px] mb-2 rounded-[5px]' onClick={handleLogin}>Login</button>
            <span className='text-blue-500'>Forgot Password?</span>
        </div>
    </div>
  )
}

export default Adminlogin
