import React,{useState} from 'react';
import { addNewResource } from '../../../services/resourceapi';


const Addresource = ({onClose}) => {
    
    const [newResource,setNewResource] = useState({
        name:"",type_of_resource:"",current_price:"",last_price:"",other_details:""
    })

    const handleChange = (e) => {
        setNewResource({...newResource,[e.target.name]:e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let result = await addNewResource(newResource);
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
                    <input name='name' type="text" className='w-[48%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Name' onChange={handleChange}/>
                    {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>Request Type:</label> */}
                    <input name='type_of_resource' type="text" className='w-[48%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Type of Resource' onChange={handleChange}/>
                </div>
                <div className="flex">
                    {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>User Id:</label> */}
                    <input name='current_price' type="text" className='w-[48%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Current Price' onChange={handleChange}/>
                    {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>Request Type:</label> */}
                    <input name='last_price' type="text" className='w-[48%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Last Price' onChange={handleChange}/>
                </div>
                <div className="flex">
                    {/* <label htmlFor="" className='mt-6 ml-3 mr-3 font-semibold'>Other Details:</label> */}
                    <input name='other_details' type="text" className='w-[98%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='other details' onChange={handleChange}/>
                </div>
            <div className='flex justify-between px-3'>
              <button className=' text-white bg-red-500 px-4 py-2 rounded-md w-[48%] hover:bg-red-400' onClick={onClose} >Cancel</button>
              <button className='px-4 py-2 bg-blue-500 text-white rounded-md w-[47%] hover:bg-blue-400' onClick={handleSubmit}>Add</button>
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default Addresource